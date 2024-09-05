import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import {readFile} from "node:fs/promises";
import { getWeatherData, updateWeatherData } from "./lib";
import { Weather } from "./types";


const app = new Hono();

// se på dette nærmere og spør ai hvorfor dette sikkerhetssjekket er nødvendig 
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (c) => {
const weatherData = await getWeatherData(); 
  return c.json({ data: weatherData});
});

//
app.get("/:place", async (c) => {
  const reqPlace = c.req.param("place")
  const weatherData = await getWeatherData(); 
    return c.json({ data: weatherData, param: reqPlace});
});
  

app.post("/", async (c) => {
  const body = await c.req.json<Weather>();
  if (!body.place) return c.json({ error: "Missing place" }, 400);
  const data = await getWeatherData();
  const hasPlace = data.some(
    (entry) => entry.place.toLowerCase() === body.place.toLowerCase()
  );
  if (hasPlace) return c.json({ error: "Place already exist" }, 409);

  data.push(body); 
  await updateWeatherData(data); 

  // vanlig status kode for når vi oppretter noe 201: 
  return c.json({ data }, 201);
});
  
const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
