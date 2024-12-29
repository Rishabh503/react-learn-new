// import React from 'react';
import { CricketCards } from "./components/cricketers";
import Netflix from "./components/netflix";
import Header, { Footer, NetflixSeries } from "./components/netflixseries";
import {EventHandling} from "./components/EventHandling"
import {EventProps} from "./components/EventProps"

//importing css

export const App=()=>{
  // return [<NetflixSeries key="1"/>,<NetflixSeries key="2"/>];  syntax for fragment by indexing
  // <div>
 return (<>
                  <Header/>
                <h1>this is from netflixseries</h1>
                 <NetflixSeries/>
                 <h1>this is from netflix</h1>
                 <Netflix/>
                 <Footer/>
        </>
 );
};

//this is how we create a component its created with pascal case ie first letter up

export const Cards=()=>{
  return (
    <div className="container">
      <h1 className="card-property">Cricketers Cards</h1>
      <CricketCards/>
    </div>
  );
};

export const Events=()=>{
  return (
  <div>
    {/* <EventHandling/> */}
    <EventProps/>
  </div>
  );
};

























































