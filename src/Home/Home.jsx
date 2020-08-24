import React from 'react';

import './Home.css';
import homeImg from '../images/man.jpg';
import Running from '../images/Running.png';

const Home = () => (
  <div className="Home" style={{ backgroundImage: `url(${homeImg})` }}>
    <div className="home-content">
        <img className="Running" src={Running} alt="run"></img>
            <p className="Quote">
                Run often. Run long. But never outrun your joy of running.
                <br/>-Julie Isphording </p>
    </div>
  </div>

);

export default Home;
