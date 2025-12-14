import { character } from "./data";
import "./styles.css"

function Card(){

return(

    <div className = "card_wrapper">
        <div className="character_card">
            <img className="avatar" src = {character.avatarURL}/>
            <p className="card_info">Name:{character.fullName}</p>
            <p className="card_info">Work:{character.work}</p>
            <p className="card_info">Hobby:{character.hobby}</p>
                
        </div>
    </div>

);


}

export default Card;