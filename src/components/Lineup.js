import React from "react";
import PlayerLineup from "./PlayerLineup";

const Lineup = (props) => {
    const playerArray = props.lineup.map((player ,index) => (
        <PlayerLineup key={`${player.id}-${index}`}
        player={player}
        removeFromLineup={props.removeFromLineup}
        editRating={props.editRating}
        index={index}/>
    ))
    return <ul className="lineup">{playerArray}</ul>
}
export default Lineup