import React, { useState } from 'react';
import Actions from './Actions';
import "./styleGame.css";
export default function Player({ activePlayer, setIndex, index, currentPlayers, setCurrentPlayers, winner, setWinner }) {
    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 100));
    const [steps, setSteps] = useState(0);
    function handleLogOut() {
        setCurrentPlayers(filteredPlayers => {
            let temp = filteredPlayers
                .filter((player) => player.email != activePlayer.email); return [...temp]
        });
        if (index > 0) { setIndex(index) %currentPlayers.length-1};
    }
    function handleNewGame() {
        setRandNumber(Math.floor(Math.random() * 100));
        activePlayer.winner.push(0);
    }
    function win() {
        let players = [...currentPlayers];
        activePlayer.scores.push(steps);
        setRandNumber(0);
        setSteps(0);
        activePlayer.winner.push(1);
        localStorage.setItem(activePlayer.email, JSON.stringify(activePlayer));
        setCurrentPlayers(players);
    }
    function currentRandNumber(){
        if (randNumber === 100)
            setRandNumber("~");
        else { randNumber }
    }
    // let turns = activePlayer.email === currentPlayers[index].email;
    return (
        <div className='divPlayer'>
            <div>
                {activePlayer.winner[activePlayer.winner.length - 1] == 1 && <h4> You Won!!</h4>}
            </div>
            <div className="player">
                <h3>{activePlayer.name}</h3>
                <p>Your Number:<br /><h3>{randNumber}</h3></p>
                <p>Your Steps:{steps}</p>
                <div className='actions'><Actions setWinner={setWinner} setRandNumber={setRandNumber} currentPlayers={currentPlayers} index={index} setIndex={setIndex} randNumber={randNumber} setSteps={setSteps} steps={steps} win={win} activePlayer={activePlayer} /></div><br /><br />
                <p className='scorses'>Your Scores:
                    {activePlayer.scores.map((score) => {
                        return <span id="spanScores">{score + ","}</span>
                    })}
                </p>
                <div className='win'>
                    {activePlayer.winner[activePlayer.winner.length - 1] == 1 && <button id="logOut" onClick={handleLogOut}>Log Out</button>}
                    {activePlayer.winner[activePlayer.winner.length - 1] == 1 && <button id="randNumber" onClick={handleNewGame}>Rand a new number</button>}
                </div>
            </div>
        </div>
    );
}