








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




