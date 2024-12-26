import React from 'react';

export const App=()=>{
  // return [<NetflixSeries key="1"/>,<NetflixSeries key="2"/>];  syntax for fragment by indexing
  // <div>
 return (<React.Fragment>

                 <NetflixSeries/>
                 <Netflix/>
        </React.Fragment>
 );

//  just use <> </> for fragments
};



//this is how we create a component its created with pascal case ie first letter up
const NetflixSeries=()=>{
  return (
    <div>
    <div>
      <img src="image.png" alt="image.png" width="40%" height="30%" />
    </div>
 <h2>Name:Rishabh Tripathi</h2>
  <h3>i m 21 years old</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quisquam aspernatur 
 soluta quo tempora obcaecati doloremque fugit doloribus incidunt, totam eum eveniet, 
 consequuntur dignissimos quaerat magni illo deleniti laboriosam numquam!</p>
  </div>
  );
};
//dynamic values with variables
const Netflix=()=>{
  const namer="rishabh tripathi";
  const age="16"
  const summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aspernatur illo iusto rerum ut soluta incidunt iste quam at quae, est ab ipsam fugit recusandae, nisi suscipit, optio temporibus blanditiis!"
  let canWatch="not available";
  if (age>=18) canWatch="watch now";
  const returnCollege=()=>{
    return "Mait";
  };

  const vaildage=()=>{
if(age>18) "watch now";
return "not available";
  };
  // if(age>18){
    // return (
      // <div>
      {/* <div> */}
        {/* <img src="image.png" alt="image.png" width="40%" height="30%" /> */}
      {/* </div> */}
    {/* <h2>Name:{namer}</h2> */}
    {/* <h3>hi i am {age} years old</h3> */}
    {/* <p>called dynamically  by variables</p> */}
    {/* <p>college:{returnCollege()}</p>//by calling function  */}
    {/* <p>summary</p> */}
    {/* <p>cant see</p> */}
    {/* </div> */}
    // );
  // }
  return (
    <div>
    <div>
      <img src="image.png" alt="image.png" width="40%" height="30%" />
    </div>
  <h2>Name:{namer}</h2>
  <h3>hi i am {age} years old</h3>
  <p>called dynamically  by variables</p>
  <p>college:{returnCollege()}</p>//by calling function 
  <p>summary</p>
  <button>{vaildage()}</button> {/*method 4* by function */}
  {/* <button>{canWatch}</button> method 3* by if else */}
  {/* <button>{ age>=18?"can see":"cant see"}</button>  {/*method 2* vy terbary operator/} */}
  </div>
  );
};

