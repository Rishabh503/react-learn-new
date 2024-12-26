// import React from 'react';
import Netflix from "./components/netflix";
import Header,{NetflixSeries,Footer} from "./components/netflixseries";
import { CricketCards } from "./components/cricketers";
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

//  just use <> </> for fragments
};

//this is how we create a component its created with pascal case ie first letter up

export const Cards=()=>{
  return (
    <div>
      <CricketCards/>
    </div>
  );
};

























































