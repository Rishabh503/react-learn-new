const reactExpense="reactExpense";

export const getLocalStorage=()=>{
    const intialExpense=localStorage.getItem(reactExpense);
            //return using json
            //but for the first time it will be null handling that
            //return empty array
    if(!intialExpense) return [];
      return JSON.parse(intialExpense);
}

export const setLocalStorage=(expenses)=>{
    localStorage.setItem(reactExpense,JSON.stringify(expenses));

}