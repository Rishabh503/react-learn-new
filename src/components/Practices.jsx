export const Practices = ()=>{
    const students=[1];
    return(
        <div>
            {/* <p> basciaaly ise chalana hai</p> */}
            {/* <p>method 1</p> */}
            {/* <p>{students.length && "no of students"}</p> */}
            <P> {students.length===0 && "no students found"}</P>
            <p>Number of students:{students.length}</p>
        </div>
    );
};