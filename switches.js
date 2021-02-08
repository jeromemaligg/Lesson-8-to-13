const shoe = 'air max';

switch(shoe){
    case 'jordan 11':
        console.log('Shoe is Jordan 11');
        break;
    case 'asics gel lyte':
        console.log('Shoe is Asics Gel Lyte');
        break;
    default:
        console.log('Shoe is not Jordan or Asics');
        break;
}

let day;

switch(new Date().getDay()) {
    case 0:
        day = 'Monday';
        break;
        case 1:
            day = 'Tuesday';
        break;
        case 2:
            day = 'Wednesday';
        break;
        case 3:
            day = 'Thursday';
        break;
        case 4:
            day = 'Friday';
        break;
         
}
console.log(`Today is ${day}`);