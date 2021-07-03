import React from "react";
import { Sign } from './signup.js';

function Home() {

    return (
        <>
        <div class="center-div">
        <div class="global-image-text">
            <div class="main-text-position">
                <h1>Welcome to <span>AlgoBattle!</span></h1>
                <h2>A new way to learn.</h2>
                <p><strong>AlgoBattle</strong> is a new, revised platform for practicing your skills, expanding your knowledge in a fun and engaging way by competing with other players worldwide!</p>
                <Sign/>
            </div>
            
            <div class="imagePosition">
                <img src="main-image.svg" class='main-image' />
            </div>
        </div>
    </div>

    <div class="centerText">
        <div class="main-info-container">
            <div class="developers-difficulty">
                <img src="speedometer.png" width='100px' />
                <h3>Difficulty</h3>
                <p>Right from beginner to advanced difficulties. Whether you are new to coding or having years of experience, you can find a difficulty tailored for you.</p>
                <span></span>
            </div>
    
            <div class="modern-motivation">
                <img src="success.svg" width='100px' />
                <h3>Practice</h3>
                <p>AlgoBattle provides a new approach to the idea of practice, through 1v1s and </p>
                <span></span>
            </div>
    
            <div class="personalised-problem-set">
                <img src='podium.png' width='100px' />
                <h3>Live Scoreboard</h3>
                <p>At the end of each month, there will be a reward given to the Top 10 on the leaderboard. <span>Stay tuned!..</span></p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home;