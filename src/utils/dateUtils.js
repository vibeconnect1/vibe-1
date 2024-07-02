// dateUtils.js
export function SendDueDateFormat(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:00`;
}
  

export function ShowFormatedDueDateOnDateField(dateString){
    if (!dateString) {
      return ""
    }

    const dateTimeString = dateString.split('+')[0];
      // Parse the date and time string into a Date object
      const targetDate = new Date(dateTimeString);
  
      const formattedDate = targetDate.toLocaleString(); // Adjust the formatting as needed

    return formattedDate;


  };

export function FormattedDateToShowProperly(inputDateTime) {

  const date = new Date(inputDateTime);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return date.toLocaleString('en-US',options);
}

export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString(); // Adjust the format as needed
};