import {useRef, useState} from 'react';
export default function Player(){
    const playerName=useRef();
    const [enteredPlayerName, setEnteredPlayerName]=useState(null);
    function handleName(){
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value="";
    }

    return(
        <section id="player">
            <h2>Welcome {enteredPlayerName??"Unknown Player"}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleName}> Set Name </button>
            </p>
        </section>
    );
}