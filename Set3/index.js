//1
const formatArray = (arr)=> `The array has ${arr.length} items, and the first item is "${arr[0]}" 
and the last item is "${arr[arr.length-1]}".`;
const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);

/************************************************************************************** */
//2

const formatProduct = ({name,price,inStock})=>`${name} costs INR ${price} and is 
${inStock?"in Stock":"not in stock"}`;
const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };
  
  const message1 = formatProduct(product);
  console.log(message1);

/************************************************************************************** */
//3

//const findPerson = (arr,val)=> arr.find(ele=>(ele.name===val));

    //return typeof(ans)=="undefined"?null:ans;
//};
const findPerson1 = (arr,val)=> arr.find(ele=>(ele.name===val))??null;
console.log(findPerson1([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"));

/************************************************************************************** */

//4
const pickFirstAndSecond = ([first,second,...arr]) => ({first,second});
console.log(pickFirstAndSecond(["orange", "banana", "apple"]));

/************************************************************************************** */

//5

const startsWithA = str => str.charAt(0)==='A';
console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"));
/************************************************************************************** */
//6
const printFirstCharacter = ([first,...arr])=>first;
console.log(printFirstCharacter([1, 2, 3, 5, 8]));
/************************************************************************************** */

//7
const printLastFive = arr => {
const [a,b,c,d,e]=arr.reverse();
return [a,b,c,d,e].reverse();
};
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));

/************************************************************************************** */

//8
const printSecondChar = arr => arr[1]*20;
const printSecondCharacter = ([a,b,...arr]) => b*20;
console.log(printSecondCharacter([1, 2, 3, 5, 8]));

/************************************************************************************** */

//9

const sayHello = ([first,second,...arr])=>"Hello "+second;
console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));

/************************************************************************************** */

//10
const sumOfEvenIndices = (arr) => 
{   let temp=0;
    arr.forEach((value,index)=>index%2===0?temp=temp+value:temp);
    return temp;
} 
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5]));
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30
//hint: forin
/************************************************************************************** */

// 11
const sumFirstTwoElements = ([a,b])=>a+b;
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

/************************************************************************************** */
//12

const printMultipleOfFive = arr=>arr.find(ele=>ele%5===0);
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5

/************************************************************************************** */
//13
const getAddress = ({name,postalCode,city})=> ({postalCode,city});
const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  
  console.log(getAddress(userData));

  /************************************************************************************** */

  //14

  const printData = ({name,postalCode,country})=>`${name} lives in ${country}`;
  const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }
  console.log(printData(userData1)); // Gaurav lives in Japan
  
  
  const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
  }
  console.log(printData(userData2)); // Pritam lives in India

  /************************************************************************************** */

  //15
  const printProductDetails = ({name,specification:{capacity,size},price})=>
  `${name} which is of ${size}, has a capacity of ${capacity}`;

  const product1 = {
    name: "Apple MacBook Air 2020",
      specification: {
          capacity: "256GB",
        size: "13.3 Inch"
      },
    price: 82900
  }
  console.log(printProductDetails(product1));