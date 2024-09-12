import Title from "./title";

type Card = {
    title: string, 
    description: string, 
    username: string, 
    setUsername: any

}
    
export default function Card(props: Card){
    const {title, description, setUsername, username} = props; 
    const changeUsername = ()=>{
        setUsername("Endret tittel")
    }
    
    return (
    <article>
        <h2><Title title={title} username={username}/></h2>
        <p>{description}</p>
        <button onClick={changeUsername}>Kjøp</button>
    </article>
    
    ); 
}