//Create an object person with two properties, "name" and "age" and 
//then updates the "age" property to a new value. Initial age should be 30.
const person = {
    Username:"Sarath",
    age:30
};
person.age=35;
console.log(person);
// ********************************************************************************

//Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const isSportsCar = car=>car.horsepower>=300;
const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//***************************************************************************************

//Write a function that takes an object person and a number num as arguments and 
//returns true if the person's age plus num is greater than 21. Otherwise, it should return false.

const isEligible=(person, sum)=>person.age+sum>21;
const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true

//***************************************************************************************

// Write a function that takes an object blog and returns true if the blog has 
// more than 1000 views (i.e. has a views property greater than 1000)
const getViews = blog=>blog.views>1000;
const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

//***************************************************************************************

let a = 1;
let b = 2;
// Your ES6 Code here
[a,b]=[2,1];

console.log(a) // 2
console.log(b) // 1

//***************************************************************************************
//6

const add=(a = 30, b = 0)=>a+b;
console.log(add(2, 3));

//***************************************************************************************
//7

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combineObjects=()=>{
    const newObj=obj1;
    newObj.c=3;
    newObj.d=4;
    return newObj;
};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
//***************************************************************************************


//8
const getData=({name,address})=>console.log(name+"\n"+address.city);
const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
getData(person);

//***************************************************************************************
//9
const stringToUpperCase = str=>str.toUpperCase();
console.log(stringToUpperCase("hello")); // "HELLO"

//***************************************************************************************

//10

const concatenateStrings =(str1,str2) => str1+str2;
console.log(concatenateStrings("hello", "world")); // "helloworld"

//***************************************************************************************


//***************************************************************************************
//11

const lastElement=arr=>arr[arr.length-1];
console.log(lastElement([1, 2, 3, 4, 5])); // 5


//***************************************************************************************

//12

const firstElement = arr=>arr[0];
console.log(firstElement([1, 2, 3, 4, 5])); // 1

//***************************************************************************************

//13

const sumFirstElement = (arr,val)=>arr[0]+val;
console.log(sumFirstElement([1, 2, 3], 5)); // 6

//***************************************************************************************

//14

const sumFirstAndLast = arr=>arr[0]+arr[arr.length-1];
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//***************************************************************************************
//15
const personInfo = person=> `${person.name} is ${person.age} years old`;

const person3 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person1)) // Expected output: "John is 25 years old."
console.log(personInfo(person2)) // Expected output: "Jane is 45 years old."


//***************************************************************************************