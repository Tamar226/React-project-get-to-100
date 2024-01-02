import { User } from "./User";
import React, { useState } from 'react';
import './styleSignUp.css';
export default function SignUp({ setCurrentPlayers, currentPlayers, setState, state }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpError, setSignUpError] = useState('');
    function guestSignUp() {
        // setName('Guest');
        // setEmail('guest@getto100.net.il');
        // setPassword(2468);
        let nameForGuest = "Guest " + ` ${currentPlayers.length+1}`;
        let emailKeyForGuest = "guest" + ` ${currentPlayers.length+1}`;
        let user = new User(nameForGuest, emailKeyForGuest, "2468");

        let updatedPlayers = [...currentPlayers];
        updatedPlayers.push(user);
        localStorage.setItem(email, JSON.stringify(user));
        setCurrentPlayers(updatedPlayers);
    }
    function handleRegistration() {
        if (!name || !email || !password) {
            setSignUpError('Please fill in all fields.');
            return;
        }
        let user = new User(name, email, password);
        let faundUser = JSON.parse(localStorage.getItem({ email }));
        console.log(faundUser);
        if (faundUser) {
            setSignUpError('Email address is not available. Please enter another email');
        }
        let updatedPlayers = [...currentPlayers];
        updatedPlayers.push(user);
        localStorage.setItem(email, JSON.stringify(user));
        setCurrentPlayers(updatedPlayers);
        console.log(currentPlayers);
        setSignUpError('Registration successful. You can start play.');
    }
    return (

        <div className="divSignUp">
           
            <h2>Sign Up</h2>
            {signUpError && <h5 style={{ color: 'red' }}>{signUpError}</h5>}
            
            <label>Name:</label>
            <input type="text" placeholder="This is your user-name in the game" value={name} onChange={(e) => setName(e.target.value)} /><br />

            <label>Email:</label>
            <input type="email"placeholder="Write your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label>
            <input type="password" placeholder="Write your password"value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <div className="connect">
                <button id="connectButton" onClick={handleRegistration}>Connect</button>
                <button id="signupGuest" onClick={() => guestSignUp()}>SignUp as a guest</button>

            </div>
        </div>
    )
};

