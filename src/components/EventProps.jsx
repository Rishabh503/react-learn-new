export const EventProps=()=>{

    const handleWelcomeUser=(user)=>{
        alert(`hey ${user} welcome`);
    };

    const handleHover=(user)=>{
        alert("hey thanks for entering");
    };
        

    return (
        <>

        <WelcomeUser onClick={()=>handleWelcomeUser("rishabh")}
                    onMouseEnter={handleHover}
            />
        </>
    );
};

const WelcomeUser=(props)=>{
    const handleGreetings=()=>{
        alert("kem palty");
    };
    return (
        <>
        <button onClick={props.onClick}>Click me  </button>
        <button onMouseEnter={props.onMouseEnter}> Hover mem</button>
        <button onClick={handleGreetings}> Greetings lelo</button>
        </>
    );
}
