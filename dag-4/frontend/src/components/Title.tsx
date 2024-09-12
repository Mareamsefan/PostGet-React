import { useState } from "react";

type TitleProps = {
    title?:string
    username?: string
}; 

export default function Title(props: TitleProps) {
    // kan bruke false/true i en state slik:
    {/*    const [username, setUsername] = useState(false)
        
         const changeUsername = ()=>{
        setUsername(!username)
      }*/} 

    const {title = "Default title", username} = props; 
    return (
    <>
    <h2>{title}</h2> 
    <p>{username}</p>
    </>
    );
}; 