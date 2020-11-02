import React from "react";

const AgentList = (props) => {
    return (
        <li className="player"
        onClick={() => {
            props.addToLineup(props.player.id)
        }}>

            <h1>{props.player.name}</h1>
            
            <h2>Position: {props.player.position}</h2>
            <h2>contract: ${props.player.contract}</h2>
            <img src={props.player.img}/>
            
        </li>
    )
}

export default AgentList