export default function Actions({ setIndex, index, setWinner, win, activePlayer, setRandNumber, randNumber, currentPlayers, setSteps, steps }) {
    function action(act) {
        function myTurn() {
            setIndex((index + 1) % currentPlayers.length);
            setSteps(steps + 1);
        }
        switch (act) {
            case '+':
                setRandNumber(randNumber + 1)
                myTurn();
                if (randNumber == 0) {
                    setRandNumber(0);
                    setSteps(0);
                }
                if (randNumber + 1 === 100) {
                    win();
                    // activePlayer.winner.push(0);
                }
                break;
            case '-':
                setRandNumber(randNumber - 1)
                myTurn();
                if (randNumber - 1 === 100) {
                    win();
                }
                if (randNumber == 0) {
                    setRandNumber(0);
                    setSteps(0);
                }
                break;
            case '*':
                setRandNumber(randNumber * 2)
                myTurn();
                if (randNumber * 2 === 100) {
                    win();
                    // activePlayer.winner=true;
                }
                if (randNumber == 0) {
                    setRandNumber(0);
                    setSteps(0);
                }
                break;
            case '/':
                setRandNumber(Math.floor(randNumber / 2))
                myTurn();
                if (randNumber / 2 === 100) {
                    win();
                    // activePlayer.winner=true;
                }
                if (randNumber == 0) {
                    setRandNumber(0);
                    setSteps(0);
                }
                break;
        }
    }
    return (
        <div>
            <button onClick={() => action("+")} disabled={activePlayer.email != currentPlayers[index].email}>+1</button>
            <button onClick={() => action("-")} disabled={activePlayer.email != currentPlayers[index].email}>-1</button>
            <button onClick={() => action("*")} disabled={activePlayer.email != currentPlayers[index].email}>*2</button>
            <button onClick={() => action("/")} disabled={activePlayer.email != currentPlayers[index].email}>/2</button>
        </div>
    )
}