import React from 'react';

import './Home.css';
import homeImg from '../images/man.jpg';

const Home = () => (
  <div className="Home" style={{ backgroundImage: `url(${homeImg})` }}>
    <div className="home-content">
      <h1>Running</h1>
        <p>
            <h3>
                Run often. Run long. But never outrun your joy of running.
                -Julie Isphording
            </h3>
        </p>
    </div>
  </div>

);

export default Home;
