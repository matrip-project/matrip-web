

export function dateToString(date:Date){
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0'); 
    const dateFormat = year+'-'+month+'-'+day;
    return dateFormat;
};