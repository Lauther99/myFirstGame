import React from 'react';
import rules from '../assets/rules/rules.json'
import '../assets/style/game.css'

const Game = () => {
    const optionsArray = ["rock", "paper", "scissors"]

    function startGame(election) {
        let randomNumber = Math.floor(Math.random() * (3 - 0) + 0)
        let computerChoose = optionsArray[randomNumber]
        console.log(computerChoose);
        console.log(rules[election][computerChoose]);
    }


    return (
        <section>
            <article>
                <h1>You can choose</h1>
                <div className='options'>
                    <div className='item' onClick={() => startGame(0)}>Rock</div>
                    <div className='item' onClick={() => startGame(1)}>Paper</div>
                    <div className='item' onClick={() => startGame(2)}>Scissors</div>
                </div>
            </article>
        </section>
    );
};

export default Game;