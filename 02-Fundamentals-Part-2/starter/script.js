// 'use strict';
// // function logger() {
// //     console.log(" my name is alejandro");
// // }

// // logger();
// // logger();
// // logger();
// // logger();
// // logger();


// function fruitProcessor(apple, oranges) {
//     //console.log(apple, oranges);
//     const juice = `juice whith ${apple} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)


// // Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); // llamamos por la posicion de elemento en el array
// console.log(friends[2]); // llamamos por la posicion de elemento en el array

// console.log(friends.length); // para saber la cantidad e elementos en el array
// console.log(friends[friends.length - 1]); // para llamar al ultimo elemnto del array

// friends[2] = 'Jay'; // agregamor un elemento al array
// console.log(friends);
// // friends = ['Bob', 'Alice'] // podemos modificar un alemento del array o varios pero no todo el array completo

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// ///////////////////////////////////////
// // Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];// esto es ta bien pero no podesmos usar los elemento dandole un nombre, solo se usa por su posicion.Por eso se usan conchetes [ ].

// const jonas = {
//  /*propiedad  */   firstName: 'Jonas',//
//   /*propiedad  */   lastName: 'Schmedtmann',
//   /*propiedad  */   age: 2037 - 1991,
//   /*propiedad  */   job: 'teacher',
//   /*propiedad  */   friends: ['Michael', 'Peter', 'Steven']
// };// a esto se lo llamaa objeto por que cada elemento tiene su nombre y no es necesario usar su posicion.En el objeto usamos las llaves { }.


// //  DOS MANERAS DE ACCERDER A LAS PROPIEDADES DEL OBJETO
// console.log(jonas.lastName);// MEDIANTE EL PUNTO
// console.log(jonas['lastName']);//MEDIANTE LOS CORCHETES


// // OTRO JEMPLO DE COMO CON LOS CORCHETES PODEMOS ACCEDER A LA PROPIEDADES DEL OBJETO.

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// // JONAS ES EL OBJETO Y USANDO LOS CORCHETES PODEMOS USAR UNA VARIABLE QUE EN ESTE CASO ES UN PROMP DONDE EL USUARIO PONE LO QUE VALLA A NECESITAR DEL OBJETO JONAS
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }// Y PARA ASEGURARNOS DE QUE EL USUARIO PONGA SIEMPRE LAS PROPIEDADES QUE EXISTEN DENTRO DEL OBJETO USAMOS EL SICLO IF .


// // COMO AGREGAR PROPIEDADES CON PUNTO Y EL CORCHETE AL OBJETO
// jonas.location = 'Portugal';// AGREGAMOS CON EL PUNTO UNA PROPIEDAD NUEVA
// jonas['twitter'] = '@jonasschmedtman';// AGREGAMOS UNA PROPIEDAD NUEVA CON LOS CORCHETES.

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',// STRING VALUE
//     friends: ['Michael', 'Peter', 'Steven'],//ARRAY VALUE
//     hasDriversLicense: true,// BOOLEAN VALUE
//     //
//     calcAge: function (birthYeah) {
//         return 2037 - birthYeah;
//     }// FUNTION VALUE
// };