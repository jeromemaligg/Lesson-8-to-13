// Function Declaration

function smile(firstName = 'Mina', lastName = 'Myoui'){
  if(typeof firstName === 'undefined'){
     firstName = 'Mina';
  }
 if(typeof lastName === 'undefined'){
     lastName = 'Myoui';
 }

 console.log('Holla');
  return `Hello ${firstName} ${lastName}`;
}

console.log(smile('Mina', 'Myoui'));

// Function Expressions
const twice = function(x = 5){
 return x * x;
}

console.log(twice(5));

// Immediately Invocable Function Expression - IIFEs

(function(name) {
    console.log(`Name ${name}`)
})('Mina');

// Property Methods 
const todo = {
    add: function(){
        console.log('Not todo');
    },
    edit: function(id){
        console.log('Edit todo ${id = 123}')
    }
}


todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit();
todo.delete();
