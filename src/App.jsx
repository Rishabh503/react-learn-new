export const App=()=>{
  return(
  <div>
    {/* //calling a componen */}
    <NetflixSeries/>
    <div>
      <img src="image.png" alt="image.png" width="40%" height="30%" />
    </div>
 <h2>Name:Rishabh Tripathi</h2>
  <h3>i m 21 years old</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quisquam aspernatur soluta quo tempora obcaecati doloremque fugit doloribus incidunt, totam eum eveniet, consequuntur dignissimos quaerat magni illo deleniti laboriosam numquam!</p>
  </div>
  );
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
