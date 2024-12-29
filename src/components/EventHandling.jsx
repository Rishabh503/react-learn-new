import "../components/Practice_event.css"
export const EventHandling=()=>{
    const handleButtonClick=(event)=>{
            alert("hello button clicked");
            // console.log(event);
    };
    const handleWelcomeUser=(user)=>{
        console.log(`hey ${user} welcome`);
    };
    return (
    <div>
        <h1> event handling sikhre hai bhidu</h1>
        <button className="button"
        onClick={handleButtonClick}
        >
            click me  1
        </button>
        <p> faltu ka para hu me </p>
        <button className="button"
            onClick={()=>handleButtonClick()}
        >
            click me 2
        </button>
        <p> inline event handlers</p>
        <button className="button"
        onClick={(event)=>console.log(event)}
        >
            click me 3
        </button>
        <p> finctions components with inline arrow funtions</p>
        <button className="button"
        onClick={()=>alert("me hu jian")}
        >
            click me 4
        </button>
         <p> passing args to event handlers</p>
        <button className="button"
        onClick={()=>handleWelcomeUser("ram")}
        >
            click me 5
        </button>
    </div>
    );
};
