import React from "react";

function About() {
    return (
    <>
    <div class="about-section">
    <h1>About Us Page</h1>
    <h2>Team MAMJAM</h2>
    <p>We are passionate developers who aim to help other developers.</p>
</div>
  
  <h2 style="text-align:center">Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
       <img src="Marlon.png" style="width:90%" /> 
        <div class="container">
          <h2>Marlon</h2>
          <p class="title">Team Leader/Front End Developer</p>
          <p></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="Mike.png" style="width:90%" />
        <div class="container">
          <h2>Mike</h2>
          <p class="title">Front End Developer</p>
          <p></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="JD.png" style="width:90%" />
        <div class="container">
          <h2>JD</h2>
          <p class="title">Front/Back End Developer</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <div class="card">
       <img src="Minko.png" style="width:90%" /> 
        <div class="container">
          <h2>Minko</h2>
          <p class="title">Back End Developer</p>
          <p></p> 
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="Andy.png" style="width:90%" />
        <div class="container">
          <h2>Andy</h2>
          <p class="title">Marketing Consultant</p>
          <p></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="Ahmad.png" style="width:90%" />
        <div class="container">
          <h2>Ahmad</h2>
          <p class="title">Marketing Consultant</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  </>
    )
}

export default About;