import React from "react";
function EndGame({setState}) {
    return(<div>
<h2 id="h2endGame">Thank you for your playing with us!</h2>
<h3 id="h3endGame">You can Sign Up again...</h3>
<button id="goSignUpAfterEnd" onClick={() => setState("signUp")}>↩Sign Up</button>;
    </div>);
}
export default EndGame;