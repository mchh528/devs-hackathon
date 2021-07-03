import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

// import About from './about.js'
import Home from "./Home.js"
import FAQs from "./FAQs.js"
import Game from "./game/game.js"
import Loading from './loading.js';
import About from './about.js';




function Header() {
    return (
    <Router>
       <div class="main-pos">
        <div class="global">
            <div class="imgPos"> 
                <Link to='/'><img src="main-logo.svg" class='main-logo' alt="picture" /></Link>
            </div>
        
            <div class="text-pos">
                <div class="text-container">
                    <div class="accountPosition">
                        <h3>Account</h3>
                    </div>
                
                    <div class="aboutPosition">
                        <h3><Link to='/about'>About</Link></h3>
                    </div>
                    
                    <div class="faqPosition">
                        <h3><Link to='/faq'>FAQ</ Link></h3>
                    </div>
                </div>            
            </div>
        </div>
    </div>
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/game"><Game></Game></Route>
        <Route path="/about"><About></About></Route>
        <Route path="/loading"><Loading/></Route>
        <Route path="/faq"><FAQs/></Route>
    </Switch>
    </Router>
    )
}

export default Header;