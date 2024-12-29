import "../components/Criccards.css";

export const Cards=(props)=>{
    const {name,ipl_team,runs,about,role,img_url}=props.cricketer; // destructuting the code of jsx
    //now in the calls we can directly call the variable name,ipl_team,runs,about,role,img_url

    const btn_style={
        padding:"1.2rem 2.5rem",
        margin:"1rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:"var(--bnt-hover-bg-color)",
        color:"var(--bg-color)"
    };
    const ratings=runs>10000?"super_hit":"average";
    return (<li className="card">
        <div>
            <img 
            src={img_url}
                alt="image.png"
                width="70%"
                height="30%" />
        </div>
        <div className="card-container">
            <h2>Name:{name}</h2>
            <h3>IPL TEAM : {props.cricketer.ipl_team}</h3>
            {/* <p>Runs :<span className={runs>10000?"super_hit":"average"}>{runs}</span></p> */}
              <p>Runs :<span className={`runs ${ratings}`}>
                {runs}
                </span></p>
            <p style={{margin:"1.2rem 0"}}>About : {about}</p>

            <p style={{margin:"1.2rem 0"}}>Role:{props.cricketer.role}</p> 

            <button style={btn_style}>
                <a href={props.cricketer.profile}>VISIT PROFILE</a>
            </button>
        </div>
        </li>
        );
};