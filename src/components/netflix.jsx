
const Netflix=()=>{
    const namer="rishabh tripathi";
    const age="16"
    const summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aspernatur illo iusto rer"
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

  export default Netflix;