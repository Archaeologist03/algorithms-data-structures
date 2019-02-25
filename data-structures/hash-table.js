// class hashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }


//   set(key, value) {

// console.log(this.data)
//     for (let i = 0; i < this.data.length; i++) {
//       // case checks if there is still empty place to store data.

//       if (!this.data[i]) {
//         console.log(this.data[i], 2312323)
//         return this.data[i] = [key, value];
//       }
//       // case checks if it needs to update key with new value.
//       if (this.data[i][0] === key) {
//         return this.data[i][1] = value;
//       }
//       // case if arr is full and we need to update..(randomly(first in goes out)).
//       return this.data[0] = [key, value];
//     }


//   }

//   get(key) {
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i] && key === this.data[i][0]) {
//         return this.data[i][1];
//       }
//       return undefined;
//     }
//   }

//   keys() {
//     const keysArr = []
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArr.push(this.data[i][0]);
//       }
//     }
//     return keysArr;
//   }

// }

// const myHashTable = new hashTable(50);

// myHashTable.set("red", 333);
// myHashTable.set("red", 393);
// myHashTable.set('important', 1);
// myHashTable.set('a', 1);
// myHashTable.set('b', 51);
// myHashTable.set('c', 11);


// console.log(myHashTable.get("red"));
// console.log(myHashTable.get("important"));
// console.log(myHashTable.keys());

