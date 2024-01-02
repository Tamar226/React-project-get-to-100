import React, { useState } from 'react';
import "./styleLogIn.css"
// import "styleLogIn.css"
export default function LogIN({ setCurrentPlayers, currentPlayers, setState }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    function handleLogin() {
        if (!email || !password) {
            setLoginError('Please fill in all fields.');
            return;
        }
        let faundUser = JSON.parse(localStorage.getItem(email));
        if (!faundUser) {
            setLoginError("Invalid email or password");
        }
        else {
            if (faundUser.password === password) {
                console.log("faundUser:", faundUser);
                let updatedPlayers = [...currentPlayers];
                updatedPlayers.push(faundUser);
                setCurrentPlayers(updatedPlayers);
                console.log("currentPlayers", currentPlayers);
                setLoginError('Registration successful.');

            }
            else {
                setLoginError("No currect password")
            }


        }
    };

    return (
        <div className='divLogIn'>
            {/* <button onClick={() => guestLogIn()}>Login as a guest</button> */}

            <h2>Login</h2><br />
            <label>Email:</label>
            <input id="addName" type="email" placeholder="Write your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label>
            <input id="addPassword" type="password" placeholder="Write your password"value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
<div className='connectLogIn'>
            <button id="connect" onClick={()=>handleLogin()}>Click to connect</button>
            </div>
           

        </div>

    );
}