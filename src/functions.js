
export const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate()}`;
    return formattedDate;
    };

export function returnCurrentDate(){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-indexed (0 for January)
        const day = currentDate.getDate();
        return `${year}-${month}-${day}`;
    }


  