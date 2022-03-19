let myAge = 31; // me current age
let earlyYears = 2; // типа раниие годы собаки 

earlyYears = earlyYears*10.5;

laterYears = myAge-2; // потому что первые 2 года
laterYears = laterYears*4;

 // console.log(earlyYears); // to check
// console.log(laterYears); // to check

myAgeInDogYears= earlyYears + laterYears;

// console.log(myAgeInDogYears); // to check

let myName ='Arthur';
myName = (myName.toLowerCase());


console.log(`My name is ${myName}. I am ${myAge} old in a human years which is ${myAgeInDogYears} years old in dog years.`); //show years 

// my dog age

let myDogName = 'Bart';
let myDogAge = 8.3;
let latestYears = myDogAge-2; //0.4

let firstTwo = (myDogAge-latestYears)*10.5;

let finalAge = latestYears*4+firstTwo;

/*let firstTwo = myDogAge*10.5;
let laterYearsForDog = firstTwo -0.4;
let finalAge = laterYearsForDog*4; */

// finalAge = Math.floor(finalAge); //- для округления значения до цеолого числа 

console.log(`I have a dog. His Name is ${myDogName}. My dogs age in a human years is ${finalAge}`)
