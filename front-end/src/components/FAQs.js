import React from 'react';

function FAQs() {
    return( 
        <>
<link rel="stylesheet" href="FAQs.css" />

<div class="container">
 
  <h2>Frequently Asked Questions</h2>
 
  <div class="accordion">
    <div class="accordion-item">
      <a>Why can't I access the code battle game page?</a>
      <div class="content">
        <p>You have to sign in with your google account, after signing in, you will be able to start the game.</p>
      </div>
    </div>
    <div class="accordion-item">
      <a>How do I level up?</a>
      <div class="content">
        <p>Start code battle games with other players and do your best to win the game by solving code challenges, then you will receive points for leveling up.</p>
      </div>
    </div>
    <div class="accordion-item">
      <a>How can I see my personal stats?</a>
      <div class="content">
        <p>Please click the "Account" tab on the top of the page after you have signed in.</p>
      </div>
    </div>
    <div class="accordion-item">
      <a>What is the point of having a coding challenge with players vs players mode?</a>
      <div class="content">
        <p>Sometimes, practice coding can be boring. We have merged the fun factor into practice coding by live competition with other players.</p>
      </div>
    </div>
  </div>
  
</div>
<script  src="FAQs.js"></script>
        </>
    )
}

export default FAQs;