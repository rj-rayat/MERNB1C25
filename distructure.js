const {name, price} = {name: "Honeynut", price:1500};
console.log(price);




const discount = price * 20 / 100;
console.log(discount)

const value = price - discount;
console.log(value);

const tax = price * 5/ 100;
console.log(tax);

const pay = value + tax ;
console.log(pay);


const course = {name:"Web Mern", price:15000};

// const key = Object.keys(course);
// console.log(key)
// const values = Object.values(course);

// console.log(values)

// for (i of key){
//     console.log(i);
// };

// for (i of values){
//     console.log(i);
// }


for (i in course){
    console.log(i);
}