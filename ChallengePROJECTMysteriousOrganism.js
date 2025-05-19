// Returns a random DNA base (Given)
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases (Given)
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};


//My Code Solution:
//Tasks 1,2,8 done (non coding).
//Task3: factory function pAequorFactory.
function pAequorFactory(specimenNum, dna) {
    return {
        specimenNum: specimenNum,
        dna: dna,
        //Task4:
        mutate() {
            //Changing a random element of dna (object property).

            let randomDnaIndex = Math.floor(Math.random() * 14);
            let newRandomBase;

            for (let i = 0; i >= 0; i += 1) {
                let newRandomeBaseCandidate = returnRandBase();
                if (newRandomeBaseCandidate !== this.dna[randomDnaIndex]) {
                    newRandomBase = newRandomeBaseCandidate;
                    break;
                }
            }
            this.dna[randomDnaIndex] = newRandomBase;
            return this.dna;
        },

        //Task5:
        compareDNA(pAequor2) {
            let NoOfSameElements = 0;
            for (i = 0; i < 15; i += 1) {
                if (this.dna[i] === pAequor2.dna[i]) {
                    NoOfSameElements += 1;
                }
            }
            let commonDnaPercentage = (NoOfSameElements / 15) * 100;
            console.log(
                `specimen ${this.specimenNum} and specimen ${pAequor2.specimenNum} have ${commonDnaPercentage}% DNA in common.`
            );
            return commonDnaPercentage;
        },
        //Task6:
        willLikelySurvive() {
            let survivalPoints = 0;

            for (let i = 0; i < this.dna.length; i += 1) {
                if (this.dna[i] === "C" || this.dna[i] === "G") {
                    survivalPoints += 1;
                }
            }

            let survivalPercentage = (survivalPoints / 15) * 100;
            if (survivalPercentage >= 60) {
                return true;
            } else {
                return false;
            }
        },

        //Task9: Part-1) Challenge yourself further!!!*IMPORTANT
        complementStrand() {
            let ComDna = [...this.dna];
            for (let i = 0; i <= 14; i += 1) {
                if (ComDna[i] === "A") {
                    ComDna[i] = "T";
                } else if (ComDna[i] === "T") {
                    ComDna[i] = "A";
                } else if (ComDna[i] === "C") {
                    ComDna[i] = "G";
                } else if (ComDna[i] === "G") {
                    ComDna[i] = "C";
                }
            }
            return ComDna;
        },
    }; //end of return(object).
} //end of factory function pAequorFactory.

//Tests:
let specimen1 = pAequorFactory(1, mockUpStrand());
console.log("Complement strand of specimen1: " + specimen1.complementStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1);
console.log(specimen2);
//console.log(specimen1.mutate());
console.log(specimen1.compareDNA(specimen2));
console.log(
    "Survival likelihood of specimen1: " + specimen1.willLikelySurvive()
);

//Task7: Create and store 30 instances of pAequor that can survive in their natural environment.
function DnaSampleArray() {
    let dnaSamples = []; //Output: 30 DNA sample objects in array.
    let specimenNum = 0;

    for (let i = 0; specimenNum <= 29; i += 1) {
        //Error Corrected: At specimenNum 29, it will become 30 after incement inside for loop! So stopping at 29!
        specimenNum += 1;
        let dna = mockUpStrand();
        let specimen = pAequorFactory(specimenNum, dna); //Is an object.
        if (specimen.willLikelySurvive()) {
            dnaSamples.push(specimen);
        } else {
            specimenNum -= 1;
        }
    }
    return dnaSamples;
}

let StoreDnaSampleArray = DnaSampleArray(); //Thirty Objects Array i.e. 30 pAequor samples. *input for last function.

//Tests:
console.log("==>>30 DNA samples array: " + StoreDnaSampleArray);
console.log("==>> 30 DNA sample details:");
StoreDnaSampleArray.forEach((SampleArrayElement) => {
    console.log("Specimen/Object no. " + SampleArrayElement.specimenNum + ":");
    console.log(SampleArrayElement);
    console.log("Survival Likelihood: " + SampleArrayElement.willLikelySurvive());
});

//Task9: Part-2) ***IMPORTANT
//Challenge yourself further!!! Use the .compareDNA() to find the two most related instances of pAequor.

function twoMostRelatedpAequor(thirtyObjectsArray) {
    let arrayOfsinglePairComparisonArrays = [];
    for (let i = 0; i <= 29; i += 1) {
        for (let j = i + 1; j <= 29; j += 1) { //*****IMPORTNAT - DV7

           
            let currentObject = thirtyObjectsArray[i];
            //specimen no = arrENo(=i)+1
            let currentObjectNo = thirtyObjectsArray[i].specimenNum;
            let comparingObject = thirtyObjectsArray[j];
            let comparingObjectNo = thirtyObjectsArray[j].specimenNum;
            let pairComparisonPercentage = currentObject.compareDNA(comparingObject);
            //console.log(currentObjectNo);
            //console.log(comparingObjectNo);
            //console.log(pairComparisonPercentage);
            let singlePairComparisonArray = [];
            //singlePairComparisonArray defined.
            singlePairComparisonArray.push(currentObjectNo);
            singlePairComparisonArray.push(comparingObjectNo);
            singlePairComparisonArray.push(pairComparisonPercentage);
            //console.log(singlePairComparisonArray);
            //singlePairComparisonArray modified/filled.
            arrayOfsinglePairComparisonArrays.push(singlePairComparisonArray);      
        }
    }
    console.log(arrayOfsinglePairComparisonArrays); //optional
    console.log(arrayOfsinglePairComparisonArrays.length); //optional

    let arrayToBeSorted = [...arrayOfsinglePairComparisonArrays];
    arrayToBeSorted.sort((a, b) => b[2] - a[2]);
    console.log(arrayToBeSorted); //optional

    return `The two most related instances of pAequor are specimen ${arrayToBeSorted[0][0]} and specimen ${arrayToBeSorted[0][1]} with having ${arrayToBeSorted[0][2]}% DNA in common!`;
}

//Test:
console.log("==>>Tests for, find the two most related instances of pAequor:--------------------------------------");
console.log(twoMostRelatedpAequor(StoreDnaSampleArray)); //Last Part Of Output.

//Code ends here. Thanks!
//Coded by: RisingCoderVajahat@gmail.com or DongreVajahat@gmail.com . My Twitter: https://x.com/VajahatDongre i.e. @VajahatDongre - Damon Ryder DV7.
//Original code on Codecademy and on VS code local.








