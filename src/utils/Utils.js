/** Method for saving data into localStorage for later usage. */
export const saveData = (data) => {
    localStorage.setItem("Date", data.date);
    localStorage.setItem("Message", data.message);
    localStorage.setItem("Theme", data.theme);
}
/** Method for getting data from localStorage. */
export const getSavedData = () => {
    const date = localStorage.getItem("Date");
    const message = localStorage.getItem("Message");
    const theme = localStorage.getItem("Theme");
    return {date: date, message: message, theme: theme};
}
/** Method for knowing if we are in the output page. */
export const isURLOutput = () => {
    const uri = window.location.pathname;
    if(uri.includes("output")){
        return true;
    }else{
        return false;
    }
}