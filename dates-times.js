let val;

const today = new Date();
let birthday = new Date('05=25-2000 1:30:00');
birthday = new Date('May 25 2000');
birthday = new Date('5/25/00');


val = today.getMonth();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val= today.getMilliseconds();
val = today.getMinutes();
val = today.getTime();



birthday.setMonth(6);
birthday.setDate(25);
birthday.setFullYear(2030);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);

console.log(birthday);