//Got a Javascript question asked in an interview (Accenture) #JavaScript #Function

//Problem: Write a function to find a missing number in an array of consecutive integers.

function findMissingNumber(arr) {

    for (let i = 0; i < arr.length - 1; i += 1) {
        if (Math.abs(arr[i + 1] - arr[i]) !== 1) {
            if (arr[i + 1] > arr[i]) {            //ascending array
                return 'Missing number' + ': ' + (arr[i] + 1);
            }
            else if (arr[i + 1] < arr[i]) {      //descending array
                return 'Missing number' + ': ' + (arr[i] - 1);
            }
        }
    }

    //already complete array/ no missing number!
    if (arr[1] - arr[0] === 1) {                 //ascending array
        return `Next number is ${arr[arr.length - 1] + 1}`
    } else if (arr[0] - arr[1] === 1) {          //descending array
        return `Next number is ${arr[arr.length - 1] - 1}`
    }
}

//example tests:
const array = [2, 3, 4, 6, 7]; //ascending array
console.log(findMissingNumber(array));
//Output: Missing number: 5

const arr2 = [99, 100, 101, 102, 103, 104, 106]; //ascending array
console.log(findMissingNumber(arr2));
//Output: Missing number: 105

const arr3 = [99, 98, 97, 96, 95, 94, 92, 91, 90]; //descending array
console.log(findMissingNumber(arr3));
//Output: Missing number: 93

const arr4 = [1, 2, 3, 4, 5, 6];   //ascending complete array! 
console.log(findMissingNumber(arr4));
//Output: Next number is 7

const arr5 = [6, 5, 4, 3, 2, 1];   //descending complete array! 
console.log(findMissingNumber(arr5));
//Output: Next number is 0


//Code ends here. Thanks!
//Coded by: RisingCoderVajahat@gmail.com or DongreVajahat@gmail.com . My Twitter: https://x.com/VajahatDongre i.e. @VajahatDongre - Damon Ryder DV7. 
