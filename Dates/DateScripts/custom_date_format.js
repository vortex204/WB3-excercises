const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayOfMonth = currentDate.getDate();
const month = monthsOfYear[currentDate.getMonth()];
const year = currentDate.getFullYear();
const dayOfWeek = daysOfWeek[currentDate.getDay()];

const formattedDate = `${dayOfMonth}-${month}-${year} (${dayOfWeek})`;
console.log(formattedDate);
