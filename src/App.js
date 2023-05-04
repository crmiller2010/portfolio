import React, {useState} from 'react';
import './App.css';
import AboutMe from './AboutMe'
import Resume from './Resume'
import Portfolio from './Portfolio';
import Contact from './Contact';
function App() {
  const[active, setActive] = useState("AboutMe")
  return (
  <div>
    <div class='header'>
    <h1>Chris Miller</h1>
    <div class='links'>
      <div id='about-me'><button onClick={()=> setActive('AboutMe')}><h3>About me</h3></button></div>
      <div id='portfolio'><button onClick={()=> setActive('Portfolio')}><h3>Portfolio</h3></button></div>
      <div id='contat'><button onClick={()=> setActive('Contact')}><h3>Contact</h3></button></div>
      <div id='resume'><button onClick={()=> setActive('Resume')}><h3>Resume</h3></button></div>
    </div>
    </div>

    <div class ='body'>
      {active === 'AboutMe' && <AboutMe />}
      {active === 'Portfolio' && <Portfolio />}
      {active === 'Contact' && <Contact />}
      {active === 'Resume' && <Resume />}
         
    </div>

    <div id='footer'>
      <div id="GH">
      <p><a href="https://github.com/crmiller2010"> Take a look at my Github</a></p>
      </div>
      <div id="LI">
      <p><a href='https://www.linkedin.com/in/crmiller2010/'> this is my LinkedIn</a></p>
      </div>
    </div>
  </div>
    
    
      
  );


}



export default App;
