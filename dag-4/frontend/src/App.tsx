import { useState } from "react";
import Card from "./components/card";
import Title from "./components/title";

//maping- er for å gå gjennom en liste på/array


function App() {
// kun verdier som endres etter en handling, som kan 
// brukes i kombo med events? 
 // const [username, setUsername] = useState("Mari")
/*
  const changeUsername = ()=>{
    setUsername("Logget ut")
  }
    */
  // eksempel handelkurv som teller oppover for hver produkt som legges til 
  {/*const changeUsername = ()=>{
    setUsername(prev => prev + 1)
  }*/}

  const [username, setUsername] = useState("En ny tittel")

 
// kan ikke bruke states som er innpakket i en komponent, du må flytte den ut eller sende den videre? 
  const produkter = [
    {
      id: crypto.randomUUID(), 
      title: 'Bukse',
      description: 'Fin blå bukse'
    },
    {
      id: crypto.randomUUID(),
      title: 'Genser',
      description: 'Fin blå Genser'
    }
  ]

  return (
    <section>
      <Title title="Produkter"/>
      <Title title="Medlemstilbud"/>

      {/*<p>{username}</p>
      <button onClick={changeUsername}>Logg ut</button>
      */}

      {
        produkter?.map(produkt => <Card 
          key={produkt.id} 
          title={produkt.title} 
          description={produkt.description}
          username={username}
          setUsername ={setUsername} 
          />)
      }
  
    </section>
    ); 

}

export default App
