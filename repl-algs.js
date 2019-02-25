





// ---------------- ****************************** ------------------------ 





// function isPangram(string){
// let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
// let counter = 0;

// let splited = string.toLowerCase().split("");
// alphabet.forEach(el => {
//   for (let i = 0; i < splited.length; i++) {
//     if(el === splited[i]){
//       counter++;
//       break;
//     }
//   }
// });


// }


// var string = "The quick brown fox jumps over the lazy dog."


// isPangram(string);





// ---------------- ****************************** ------------------------ 





// function solution(string) {
//     let newStr = string.split("");

//     for(let i = 0; i < newStr.length; i++) {
//         newStr[i].match(/[A-Z]/) ? newStr[i] = ` ${newStr[i]}` : false;
//     }
//     return newStr.join("")
// }
//         // char.match(/[A-Z]/) ? char.replace(/[A-Z]/ , (" " + char)) : false;


//     // let upperChar = string.match(/[A-Z]/g);
//     // let replaced = string.replace(/[A-Z]/g, " -").split(" ")

//     // let splited = string.split(/[A-Z]/);
    
//     // // upperChar.forEach(el => ind.push(string.indexOf(el))); 
//     // let newArr = [];

//     // // replaced.forEach(el => el[0] === "-" ? el[0] =  )
//     // let filtered1 = replaced.filter(el => el[0] === "-");
//     // let filtered2 = replaced.filter(el => el[0] !== "-")
//     // // let mapped = filtered.map((el, i) => el[0] = upperChar[i]);
//     // console.log(filtered2)

// solution('camelCasingRacing')





// ---------------- ****************************** ------------------------ 




// var sum_pairs=function(ints, s){
//     let arr = [];
//     let pair = [];

//     for (let i = 0; i < ints.length; i++) {
//         if (arr[0] === undefined) {
//             arr.push(ints[i]); 
//         }
//         else {
//             let filtred = arr.filter(el => el + ints[i] === s);
//             filtred[0] === undefined ? arr.push(ints[i]) : pair = [filtred[0], ints[i]];
//             if (pair[0] !== undefined) return pair;
//         }
//     }

// }

// sum_pairs([10, 5, 2, 3, 7, 5],         10)





// ---------------- ****************************** ------------------------ 





// function scramble(str1, str2) {
//   const obj1 = {};
//   const obj2 = {};
//   let counter = 0;

//   str1.split("").forEach(char => obj1.hasOwnProperty(char) ? obj1[char]++ : obj1[char] = 1);
//   str2.split("").forEach(char => obj2.hasOwnProperty(char) ? obj2[char]++ : obj2[char] = 1);

//   for (let prop in obj2) {
//     if (obj1.hasOwnProperty(prop) && obj1[prop] > 0) {
//       counter += obj2[prop];
//       obj1[prop] -= obj2[prop];
//     }
//   }
//       console.log(obj1);
//       console.log(obj2);
//       console.log(counter);


//   return counter === str2.length ? true : false;

// }


// scramble('scriptjava','javascript')







// ---------------- ****************************** ------------------------ 






// var uniqueInOrder = function (iterable) {
//   let sorted = iterable.split("").sort();
//   let temp;
//   for (let i = 0; i < sorted.length; i++) {
//     temp = sorted[i];
//     if (temp === sorted[i + 1])

//   }

//   console.log(sorted)
// }

// uniqueInOrder('AAAABBBCCDAABBB')






// ---------------- ****************************** ------------------------ 





// CodeWars alg (i think)

// function formatDuration(seconds) {
//   if (seconds === 0) return "now";

//   let second;
//   let minute;
//   let hour;
//   let day;
//   let year;

//   seconds < 60 ? second = seconds : false;
//   if (seconds >= 60) {
//     minute = Math.floor(seconds / 60);
//     second = seconds - minute * 60;
//   }
//   if (minute >= 60) {
//     hour = Math.floor(minute / 60);
//     minute = minute - hour * 60;
//   }
//   if (hour >= 24) {
//     day = Math.floor(hour / 24);
//     hour = hour - day * 24;
//   }
//   if (day >= 365) {
//     year = Math.floor(day / 365);
//     day = day - year * 365;
//   }

//   const time = {
//     year,
//     day,
//     hour,
//     minute,
//     second
//   }
//   let res = [];

//   for (let prop in time) {
//     if (time[prop]) {
//       res.push(time[prop] > 1 ? `${time[prop]} ${[prop]}s` : `${time[prop]} ${[prop]}`);
//     }
//   }

//   let string = "";

//   res.forEach((el, i) => {
//     if (res.length === 1) {
//       string += el;
//     }
//     else if (i === res.length - 1) {
//       string += `and ${el}`;
//     }
//     else if (i === res.length - 2) {
//       string += `${el} `
//     }
//     else {
//       string += `${el}, `
//     }
//   });

//   return string;
// }

// formatDuration(0)





// ---------------- ****************************** ------------------------ 





// function score(dice) {
//   let counter = 0;
//   const obj = {};
//   dice.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
//   for (let prop in obj) {
//     if (obj[prop] > 4) {
//       obj[`second${prop}`] = 2;
//       obj[prop] -= 2;
//     } else if (obj[prop] > 3) {
//       obj[`second${prop}`] = 1;
//       obj[prop]--;
//     }
//   }

//   console.log(obj);
//   if (obj[1] === 3) counter += 1000;
//   if (obj[6] === 3) counter += 600;
//   if (obj[5] === 3) counter += 500;
//   if (obj[4] === 3) counter += 400;
//   if (obj[3] === 3) counter += 300;
//   if (obj[2] === 3) counter += 200;
//   if (obj.second1 === 2 || obj[1] === 2) counter += 200;
//   if (obj.second5 === 2 || obj[5] === 2) counter += 100;
//   if (obj[1] === 1 || obj.second1 === 1) counter += 100;
//   if (obj[5] === 1 || obj.second5 === 1) counter += 50;

//   return counter;

// }

// score([2, 2, 3, 2, 4])



// //  Three 1's => 1000 points
// //  Three 6's =>  600 points
// //  Three 5's =>  500 points
// //  Three 4's =>  400 points
// //  Three 3's =>  300 points
// //  Three 2's =>  200 points
// //  One   1   =>  100 points
// //  One   5   =>   50 point









// ---------------- ****************************** ------------------------ 




// function narcissistic(value ) {
//     let splited = value.toString().split("");

//     let val =  splited.reduce((a, c) => a + Math.pow(Number(c), splited.length), 0);


//     let baseValue = Math.log10(value);
//     let baseVal = Math.log10(val);

//     return baseValue < baseVal ? false : true ; 



// }

// narcissistic(153 );





// ---------------- ****************************** ------------------------ 



// function solution(str){
//   let final = [];
//   let arr = str.split("");
  
//   // Loop thru arr(skipping one item = i+=2), if there is 2 items from current index on 
//   // push them concated to arr else push remainig 1 item with _
//   for (let i = 0; i < arr.length; i +=2) {
//     if (arr[i + 1] !== undefined) {
//       final.push(`${arr[i]}${arr[i + 1]}`);  
//     } else {
//       final.push(`${arr[i]}_`);
//     }
//   }
//   return final;
// }

// solution("abcde");


// ---------------- ****************************** ------------------------ 



// function factorial(n){
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   let res = arr.reduce((a, c) => a * c);
//   console.log(res);

//   return `${res}`;
// }


// factorial(5);




// ---------------- ****************************** ------------------------ 



  // FreecodeCamp ChunkeyMonkey from begginer section (i think)

// function chunkArrayInGroups(arr, size) {
//   let chunked = [];
//     while(arr.length > 0) {
//     chunked.push(arr.splice(0, size));
//     }
//     return chunked;
// }

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);





// ---------------- ****************************** ------------------------ 




// FreecodeCamp intermediate algs section.

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
  
//   arr.map(x =>
//     x.avgAlt = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius +  x.avgAlt, 3) / GM)));
//   arr.map(y => y.orbitalPeriod = y.avgAlt);
//   arr.map(z => delete z.avgAlt);



// return arr;
// }

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);





// ---------------- ****************************** ------------------------ 




  // Freecodecamp Make a person alg (i think)

// var Person = function(firstAndLast) {
//   // Complete the method below and implement the others similarly
//   let fullName = firstAndLast;
//   let fName = firstAndLast.split(" ")[0];
//   let lName = firstAndLast.split(" ")[1];

//   this.getFirstName = () => fName;
//   this.getLastName = () => lName;
//   this.getFullName = () => fName + " " + lName;
//   this.setFirstName = (first) => fName = first;
//   this.setLastName = (last) => lName = last;
//   this.setFullName = function (firstAndLast) { 
//   fName =  firstAndLast.split(" ")[0];
//   lName = firstAndLast.split(" ")[1];
//   }
  

//   console.log(this.setFullName("stepen kuri"));
//   console.log(this.getFirstName());
//   console.log(this.getLastName());
//   console.log(this.getFullName());
// }; 

// var bob = new Person('Bob Ross');
// // bob.setFullName("Haskell Curry");




// ---------------- ****************************** ------------------------ 





// function addTogether() {
//   let args = [...arguments];

//   if (Number.isInteger(args[0]) && Number.isInteger(args[1])) {
//     return args[0] + args[1];
//   }
//   else if (typeof args[1] === "undefined" && typeof args[0] === "number") {
//       let funk = function (inner) {
//         console.log(inner);
//         if (Number.isInteger(args[0]) && Number.isInteger(inner)) {          
//           return args[0] + inner;
//         }
//       }
//   return funk;     
//   }
  
//   else if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])){
//     return undefined;
//   }

// }

// // addTogether(2)(3);
// // addTogether(2, "3");
// // addTogether(2, 3);
// // addTogether(2)([3]);
// addTogether("http://bit.ly/IqT6zt");





// ---------------- ****************************** ------------------------ 




// function convertHTML(str) {
//   const holder = {
//     "&": "&?amp;",
//     "<": "&?lt;",
//     ">": "&?gt;",
//     '"': "&?quot;",
//     "'": "&?apos;" 
//   }
 
//  str.split("").map(x => x ==
  
  
  
// }
// console.log("Sixty &gt; twelve")
// convertHTML("Dolce & Gabbana");
// convertHTML("Sixty > twelve")





// ---------------- ****************************** ------------------------ 



// FreecodeCamp alg(i think..)

// function truthCheck(collection, pre) {
// let counter = 0;

//   for (let i = 0; i < collection.length; i++) {    
//     if (collection[i].hasOwnProperty(pre) && collection[i][pre]) {
//       counter++;
//     }  
//   }
  
//   if (counter === collection.length) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");




// ---------------- ****************************** ------------------------ 



// FreecodeCamp SteamRoller alg from intermediate section

// function steamrollArray(arr) {
//    let rez = [];

//   let funki = function (arri) { 
//     for (let i = 0; i < arri.length; i++) {
//       if (!Array.isArray(arri[i])) {
//         rez.push(arri[i]);      
//       }
//       else if (Array.isArray(arri[i])) {
//         funki(arri[i]);
//       }       
//     }    
//   }
//   funki(arr);
  
//   return rez; 
// }

// steamrollArray([1, {}, [3, [[4]]]]);



// ---------------- ****************************** ------------------------ 



// FreecodeCamp BinaryAgent alg

// function binaryAgent(str) {
//   return str.split(" ").map(x => parseInt(x, 2)).map(y => String.fromCharCode(y)).join("");
  
// }

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




// ---------------- ****************************** ------------------------ 



// FreecodeCamp Sum All Primes from intermediate section (took me a bit..)

// function sumPrimes(num) {
//   // Array of all numbers from 2 to given number(num)
//   let allNumbs = [];
//   for (let i = 2; i <= num; i++) {
//     allNumbs.push(i);
//   }
//   //Loop thru allNumbs array to remove every elment that is multiple of first number
//   //(2), then 3, and not 4 since it is multiple of 2, Eratosten sieve algorithm.
//   for (let i = allNumbs[0]; i <= allNumbs[allNumbs.length -1]; i++) {
//     let j = i;
//     while (j <= allNumbs[allNumbs.length -1]) { 
//       let g = i * j;
//       let x = allNumbs.indexOf(g);
//       if (x > 0) {
//         allNumbs.splice(x, 1)
//       }
//       j++
//     }
//   }

// return allNumbs.reduce((a, b) => a + b,);
// }

// sumPrimes(977);




// ---------------- ****************************** ------------------------ 


// FreecodeCamp LCM from intermediate section (took me a bit..) 

// function smallestCommons(arr) {
//   let sortedArr = [];
//     let holderArr = arr.sort((a, b) => a - b);                        
//     for (let i = holderArr[0]; i <= holderArr[1]; i++) {
//       sortedArr.push(i);
//     }
//     let lcmArr = [];

//     for (let i = 2; i <= sortedArr[sortedArr.length-1]; i++) {
//       while (sortedArr.some(num => num % i === 0)) {
//         lcmArr.push(i);
//         for (let j = 0; j < sortedArr.length; j++) {
//           if (sortedArr[j] % i === 0) {
//             sortedArr.splice(j, 1, (sortedArr[j] / i));
//           }               
//         }      
//       }
//       sortedArr.sort((a, b) => a - b);
//     }

//   return lcmArr.reduce((a,b) => a * b);  
// }
  // smallestCommons([1, 5]);




