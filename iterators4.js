/*The .reduce() Method
The .reduce() method iterates through an array and returns a single value.

In the above code example, the .reduce() method will sum up all the elements of the array. 
It takes a callback function with two parameters (accumulator, currentValue) as arguments. 
On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, 
a second argument can be passed which acts as the initial value of the accumulator. */

function callBackFn(accumulator, currentValue) {
return accumulator + currentValue;
}
const arr = [0,1,2,3,4,5,6,7];

const arraySum = arr.reduce(callBackFn,0);
console.log(arraySum);


// Manual function for this by me!
function arraySumFn(initialValue,array) {

    if (typeof initialValue === 'number' && typeof array === 'object') {
        let sum = initialValue; 
            for (let i = 0; i<array.length ; i++ ) {
            sum = sum + array[i];
            }
        return sum;
    } else {
    return 'Wrong input datatype(s)!';
    }
}

console.log(arraySumFn(0,arr)); 

/*Instead of remembering .reduce method and its syntax, can I create my own function and use it when needed? */
