const person = {
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    age: 20,
    email: 'naruto@gmail.com',
    hobbies: ['Hunting', 'Meditation'],
    address: {
        village: 'Hidden leaf',
        street: 'shounen'
    },
    getBirthYear:function() {
        return 2021 - this.age;
    }
};


let value;

value = person;

value = person.firstName;
value = person.age;
value = person.address.village;
value = person.address.street;
value = person.getBirthYear();


console.log(value);

const people = [{name: 'Naruto', age: 20}, {name: 'Boruto', age: 10}, {name: 'Sasuke', age: 20}];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}