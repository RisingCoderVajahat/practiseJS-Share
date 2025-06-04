/*Code Challenges: Intermediate JavaScript (Practice JavaScript Syntax: Arrays, Loops, Objects, Iterators)

Write a function justCoolStuff() (Common Elements Array)

==> (Problem) Instructions;

1. Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']


You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!*/


// Write your code here: (My solutions)

//1. Using two methods, shortest code:
//i.e. funtion commonElementsArray()

function justCoolStuff(arr1, arr2) {
    let newArray = arr1.filter((arr1E) => {
        return arr2.includes(arr1E)
    });

    return newArray;
}

//Me: NOTE that "return" came here twice! function not exiting at first return as it is inside filter (callback function) iterator!

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]



//Additional solutions;
//2. using .filter and loops without using .includes():
//i.e. funtion commonElementsArray()
function justCoolStuff3(arr1, arr2) {
    let newArray = arr1.filter((arr1E) => {
        let loopOutput;
        for (let i = 0; i < arr2.length; i += 1) {

            let arr2E = arr2[i];
            if (arr1E === arr2E) {
                loopOutput = true;
                break;
            } else {
                loopOutput = false;
            }
        }
        return loopOutput; //return should be outside the loop to let loop iterate through all arr2 elements! 
    });
    return newArray;
}

//Test;
console.log(justCoolStuff3(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]




//3. arr1,arr2 without using .filter or .include methode
//i.e. funtion commonElementsArray()
function justCoolStuff2(arr1, arr2) {
    let resultArray = [];
    for (i = 0; i < arr1.length; i += 1) {
        for (j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                resultArray.push(arr1[i]);
            }
        }
    }
    return resultArray;
}

a1 = ['cat', 'lion', 'mouse', 'hen', 'cheetah', 'sparrow', 'tiger'];
a2 = ['cat', 'tiger', 'lion', 'cheetah', 'elephant', 'deer']
console.log(justCoolStuff2(a1, a2));


/*
Correct Output:
[ 'fruit-by-the-foot', 'skateboards', 'my room' ]
[ 'fruit-by-the-foot', 'skateboards', 'my room' ]
[ 'cat', 'lion', 'cheetah', 'tiger' ]
*/

//Code ends here. Thanks!
//Coded by: RisingCoderVajahat@gmail.com or DongreVajahat@gmail.com . My Twitter: https://x.com/VajahatDongre i.e. @VajahatDongre - Damon Ryder DV7.
//Original code on GitHub (posted on Twitter) and on VS code local.
