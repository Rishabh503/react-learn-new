import seriesdata from "../api/seriesdata";
import { Cards } from "./criccards";
export const CricketCards=()=>{
return(
    <>
    <ul className="grid grid-three--cols">
        {seriesdata.map((cricketer)=>{
            return(
            <Cards key={cricketer.id}  cricketer={cricketer}/>
            );
        })};
    </ul>
    </>

);
};