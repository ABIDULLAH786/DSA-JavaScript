let arr = ['abidullah786', 20];

console.log(arr); // Output: [ 'abidullah786', 20 ]


// add new item to the end of the array
arr.push('js');

// remove item to the end of the array
arr.shift();

// add two new items to the start of the array
arr.unshift(1, 2);

// remove item from the start of the array
arr.shift();


console.log(arr); // Output: [ 2, 20, 'js' ]