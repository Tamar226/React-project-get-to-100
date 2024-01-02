import LogIN from "./LogIn"
import PlayersBoard from "./PlayersBoard";
import SignUp from "./SignUp"
import React, { useState } from 'react';
import EndGame from "./endGame";

export default function GamePage() {
    const [currentPlayers, setCurrentPlayers] = useState([]);
    let allPlayers = [...currentPlayers];
    const [state, setState] = useState("signUp");
    function endGame() {
        if(currentPlayers.length>0){
        for (let i = currentPlayers.length; i >= 0; i--) {
            
            setCurrentPlayers(filteredAllPlayers => {
                let temp = filteredAllPlayers
                    .filter((player) => player === currentPlayers[i]); return [...temp]
            });
        }
    }
        setState("afterEnd");
    }
    return (<>
        <div className="startButtons">
            {state == "signUp" && <><SignUp  setState={setState} state={state} setCurrentPlayers={setCurrentPlayers} currentPlayers={currentPlayers} /><button id="mooveToLogIn" onClick={() => setState("logIn")}>↪log In</button></>}
            {state == "logIn" && <><LogIN setState={setState} setCurrentPlayers={setCurrentPlayers} currentPlayers={currentPlayers} /><button id="mooveToSignUp" onClick={() => setState("signUp")}>↩Sign Up</button></>}
            {state != "game" && <button id="startGame" onClick={() => setState("game")}>Start Game</button>}
            {state == "afterEnd" && <><EndGame  setState={setState} state={state} setCurrentPlayers={setCurrentPlayers} currentPlayers={currentPlayers} /></>}

        </div>
        {state == "game" && <PlayersBoard setState={setState} state={state} allPlayers={allPlayers} setCurrentPlayers={setCurrentPlayers} currentPlayers={currentPlayers} />}
        {/* {state == "game" && <button onClick={addPlayer}>Add Another Player</button>} */}
        {state == "game" && <button id="endGame" onClick={endGame}>End Game</button>}

    </>


    )
}
