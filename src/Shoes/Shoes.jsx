import React from 'react';

import Alphafly from '../images/Alphafly.png';
import marchTwo from '../images/Hoka@2x.png';


const Shoes = () => (
  <div>
      <img className="Alpafly" src={Alphafly}></img>
    <p>
      Gear up for your next personal best with the Nike Air Zoom Alphafly Next%. Responsive foam is
      combined with 2 Zoom Air units to push your running game forward for your next marathon or
      road race.
    </p>
      <img className="MarchTwo" src={marchTwo}></img>
    <p>
        The first Mach boasted the HOKA ONE ONE® trio of benefits: maximum cushion and super
        responsiveness in a surprisingly lightweight package. The Mach 2 goes a step further
        with its PROFLY™ midsole. That’s a PROFLY™ midsole made with rubberized foam, which
        makes for an even lighter and more resilient ride. And it uses an engineered,
        breathable mesh upper atop the responsive, stable package. This shoe is as fast as
        lightning and ready to race.
    </p>
  </div>
);

export default Shoes;
