
//formate date to YYYY-MM-DD
export const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate()}`;
    return formattedDate;
    };
    
//return current date with YYYY-MM-DD
export function returnCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  let month = currentDate.getMonth() + 1; 
  month = month.toString().padStart(2, '0');
  
  let day = currentDate.getDate();
  day = day.toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

//  check if due date is passed
export function isDueDatePassed(dueDateStr, currentDateStr) {
    const dueDate = new Date(dueDateStr);
    const currentDate = new Date(currentDateStr);
  
    // Ignore time difference by setting hours, minutes, seconds, and milliseconds to 0
    dueDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
  
    return currentDate.getTime() > dueDate.getTime();
  }



  



  