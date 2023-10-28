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
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }


//   ///////////////////////////////////////
//   // Looping Arrays, Breaking and Continuing
//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
//   const types = [];

//   // console.log(jonas[0])
//   // console.log(jonas[1])
//   // ...
//   // console.log(jonas[4])
//   // jonas[5] does NOT exist

//   for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//   }

//   console.log(types);

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//   }
//   console.log(ages);

//   // continue and break
//   console.log('--- ONLY STRINGS ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
//   }

//   console.log('--- BREAK WITH NUMBER ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
//   }


//   ///////////////////////////////////////
//   // Looping Backwards and Loops in Loops
//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];

//   // 0, 1, ..., 4
//   // 4, 3, ..., 0

//   for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
//   }

//   for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//       console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
//   }


///////////////////////////////////////
// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 4) + 1;
// console.log(dice);

// while (dic !== 6) {
//     console.log(`You rolled ${dice}`)
//     dice = Math.trunc(Math.random() * 4) + 1;

// }

/// CODING EXERCISES
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
  
//   /* Write your code below. Good luck! 🙂 */
  
//   const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//   const tips = [];
//   const totals = [];
  
//   for (let i = 0; i < bills.length; i++) {
//       const tip = calcTip(bills[i]);
//       tips.push(tip);
//       totals.push(tip + bills[i]);
//   }
  
//   console.log(bills);
//   console.log(tips);
//   console.log(totals);
  
  
//   const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//        sum += arr[i];
//   console.log(`Iteración ${i + 1}: arr[i] = ${arr[i]}, sum = ${sum}`);
//     }
//     return sum / arr.length;
//   };
//   console.log(calcAverage([10 , 20 ,100]));
//   console.log(calcAverage(totals));
//   console.log(calcAverage(tips));
  
  
  
  
  