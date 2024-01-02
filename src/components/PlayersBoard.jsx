import React, { useState } from "react";
import Player from "./Player"
import './styleGame.css'

export default function PlayersBoard({ state, setState, currentPlayers, setCurrentPlayers, allPlayers }) {
    const [index, setIndex] = useState(0);
    // const [winner, setWinner] = useState(false);

    function average() {
        let allAverage = [];
        currentPlayers.map(wins => {
            let scorses = [...wins.scores];
            if (scorses.length > 0) {
                let avrg = scorses.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / (scorses.length);
                allAverage.push({ name: wins.name, num: Math.ceil(avrg) })
            }
        })
        let ArrayWinersToReturn = [];
        if (currentPlayers.length != 0) {
            if (currentPlayers.length < 4) {
                ArrayWinersToReturn = allAverage.map(each => {
                    return <h4>{each.name}:{each.num}</h4>
                })
            }
            else {
                ArrayWinersToReturn = allAverage.sort((a, b) => a.num - b.num);
                ArrayWinersToReturn = ArrayWinersToReturn.slice(0, 3)
                console.log(ArrayWinersToReturn);
                ArrayWinersToReturn = ArrayWinersToReturn.map(each => {
                    return <h4>{each.name}:{each.num}</h4>
                })
            }
            return <div className="topPlayers"><h3>Top Players</h3>{ArrayWinersToReturn}</div>
        }
    }

    return (
        <>
            {average()};
            <div id="currentPlayers">
                {currentPlayers.map(player => <Player key={player.email} setCurrentPlayers={setCurrentPlayers} currentPlayers={currentPlayers} activePlayer={player} index={index} setIndex={setIndex} />)}
            </div>
        </>
        // winner={winner}setWinner={setWinner}
        // key={player.email}
    );


}