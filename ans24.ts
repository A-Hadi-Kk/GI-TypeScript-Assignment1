let city = 'New York';
console.log("Is city equals to New York? I predict True.");
console.log(city == 'New York');
let country = 'USA';
console.log("Is country not equals to USA? I predict False.");
console.log(country != 'USA');

let nam = 'John';
console.log("Is name in Lower Case equals to john? I predict True.");
console.log(nam.toLowerCase() == 'john');
let onam = 'Shahid';
console.log("Is name in Lower Case not equals to shahid? I predict False.");
console.log(nam.toLowerCase() != 'shahid');

let a = 5;
let b = 10;
console.log("Is a is smaller then b? I predict True.");
console.log(a < b);
console.log("Is b is equals to a? I predict False.");
console.log(b == a);

let age = 25;
console.log("Is age >= 18 && age <= 30? I predict True.");
console.log(age >= 18 && age <= 30);
console.log("Is age < 18 || age > 30? I predict False.");
console.log(age < 18 || age > 30);

let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('grape'));