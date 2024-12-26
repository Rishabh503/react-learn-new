import seriesdata from "../api/seriesdata";
export const CricketCards=()=>{
return(
    <>
    <ul>
        {seriesdata.map((cricketer)=>{
    return (<li key={cricketer.id}>
    <div>
        <img src={cricketer.img_url}
            alt="image.png"
            width="100%"
            height="30%" />
    </div>
    <div>
        <h2>Name:{cricketer.name}</h2>
        <h3>IPL TEAM : {cricketer.ipl_team}</h3>
        <p>runs : {cricketer.runs}</p>
        <p>about : {cricketer.about}</p>
        <p>role:{cricketer.role}</p>
    </div>
    </li>
    );
        })};
    </ul>
    </>

);
};