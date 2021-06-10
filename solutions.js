// Write your Solutions here!!

//1. Define a function named `doingJavaScriptRightNow` that takes in no arguments and returns true. If an argument is passed, it should return `true` regardless of argument.

doingJavaScriptRightNow()              // true
doingJavaScriptRightNow()              // true
doingJavaScriptRightNow(null)          // true

function doingJavaScriptRightNow() {
    return true;
}
//1. Define a function named `onMarsRightNow` that takes in no arguments and returns false. If an argument is passed, it should return `false` regardless of argument.

onMarsRightNow()              // true
onMarsRightNow()              // true
onMarsRightNow("Hello")       // true

function onMarsRightNow() {
    return false;
}

//1. Write a sayHello function that adds the string `"Hello, "` to the beginning and `"!"` to the end if argument passed is a non-numeric string and if argument passed is not an empty string. If the argument does not meet the requirements return `"Hello, world!"`.

function sayHello(name) {
    return "Hello, " + name + "!";
}


sayHello("Sally")       // "Hello, Sally!"
sayHello("Jerry")       // "Hello, Jerry!"
sayHello()              // "Hello, world!"
sayHello(undefined)     // "Hello, world!"
sayHello(null)          // "Hello, world!"
sayHello("59")          // "Hello, world!"
sayHello("-732")        // "Hello, world!"
sayHello(982)           // "Hello, world!"
sayHello(-2)            // "Hello, world!"
sayHello("")            // "Hello, world!"
sayHello(true)          // "Hello, world!"
sayHello(false)         // "Hello, world!"
sayHello(NaN)           // "Hello, world!"

// 1. Define a function named `plusTwo` that takes in a number or numeric string as an argument and return that argument plus 2. Should return `NaN` for any arguments that don't fit the requirements.

function plusTwo(x) {
    return x + 2;
}

plusTwo(847)            // 849
plusTwo(-52)            // -50
plusTwo("4.3")          // 6.3
plusTwo("-362")         // -360
plusTwo(0)              // 2
plusTwo("0")            // 2
plusTwo()               // NaN
plusTwo("")             // NaN
plusTwo(undefined)      // NaN
plusTwo(null)           // NaN
plusTwo(true)           // NaN
plusTwo(false)          // NaN
plusTwo(NaN)            // NaN


//1. Define a function named `addOne` that takes in a number or numeric string as an argument and return that argument plus 1. Should return `NaN` for any arguments that don't fit the requirements.

function addOne(x) {
    return x + 1;
}

addOne(847)            // 848
addOne(-52)            // -51
addOne("4.3")          // 5.3
addOne("-362")         // -361
addOne(0)              // 1
addOne("0")            // 1
addOne()               // NaN
addOne("")             // NaN
addOne(undefined)      // NaN
addOne(null)           // NaN
addOne(true)           // NaN
addOne(false)          // NaN
addOne(NaN)            // NaN

/*
1. Define a function named `isPositive` that takes in a number or numeric string as an argument and return `true` if the argument is positive and `false` if the argument is negative. Should return `NaN` for any arguments that don't fit the requirements.
*/

function isPositive (x) {
    return x > 0;
    return true;
}

isPositive(847)            // true
isPositive(-52)            // false
isPositive("4.3")          // true
isPositive("-362")         // false
isPositive(0.000001)       // true
isPositive(-0.000001)      // false
isPositive("0.000001")     // true
isPositive("-0.000001")    // false
isPositive(Infinity)       // true
isPositive(-Infinity)      // false
isPositive(0)              // false
isPositive("0")            // false
isPositive()               // NaN
isPositive("")             // NaN
isPositive(undefined)      // NaN
isPositive(null)           // NaN
isPositive(true)           // NaN
isPositive(false)          // NaN
isPositive(NaN)            // NaN

// 1. Define a function named `isNegative` that takes in a number or numeric string as an argument and returns `true` if the argument is negative and `false` if the argument is positive. Should return `NaN` for any arguments that don't fit the requirements.

function isNegative (x) {
  return x < 0;
  return true;
}

isNegative(847)            // false
isNegative(-52)            // true
isNegative("4.3")          // false
isNegative("-362")         // true
isNegative(0.000001)       // false
isNegative(-0.000001)      // true
isNegative("0.000001")     // false
isNegative("-0.000001")    // true
isNegative(Infinity)       // false
isNegative(-Infinity)      // true
isNegative(0)              // false
isNegative("0")            // false
isNegative()               // NaN
isNegative("")             // NaN
isNegative(undefined)      // NaN
isNegative(null)           // NaN
isNegative(true)           // NaN
isNegative(false)          // NaN
isNegative(NaN)            // NaN

//1. Define a function named `isNumeric` that takes in an argument and returns `true` if the argument is numeric and `false` if the argument is not numeric. Should return `false` if argument passed is `NaN`.

function isNumeric() {
    return true;
}


isNumeric(847)            // true
isNumeric(-52)            // true
isNumeric("4.3")          // true
isNumeric("-362")         // true
isNumeric(Infinity)       // true
isNumeric(-Infinity)      // true
isNumeric(0.000001)       // true
isNumeric(-0.000001)      // true
isNumeric("0.000001")     // true
isNumeric("-0.000001")    // true
isNumeric(0)              // true
isNumeric("0")            // true
isNumeric()               // false
isNumeric("")             // false
isNumeric(undefined)      // false
isNumeric(null)           // false
isNumeric(true)           // false
isNumeric(false)          // false
isNumeric(NaN)            // false

//1. Define a function named `isNotNumeric` that takes in an argument and returns `true` if the argument is not numeric and `false` if the argument is numeric. Should return `true` if argument passed is `NaN`.

function isNotNumeric() {
    return true;
}



isNotNumeric()               // true
isNotNumeric("")             // true
isNotNumeric(undefined)      // true
isNotNumeric(null)           // true
isNotNumeric(true)           // true
isNotNumeric(false)          // true
isNotNumeric(NaN)            // true
isNotNumeric(847)            // false
isNotNumeric(-52)            // false
isNotNumeric("4.3")          // false
isNotNumeric("-362")         // false
isNotNumeric(Infinity)       // false
isNotNumeric(-Infinity)      // false
isNotNumeric(0.000001)          // false
isNotNumeric(-0.000001)         // false
isNotNumeric("0.000001")        // false
isNotNumeric("-0.000001")       // false
isNotNumeric(0)              // false
isNotNumeric("0")            // false

// *1. Define a function named `isVowel` that takes in a string as an argument and returns `true` if the argument is a vowel and `false` if it is not a vowel.

function isVowel(str) {
    var vowel = 'aeiou';
    var vcount = 0;
    for (var x = 0; x < str.length; x++) {
        if (vowel.toLowerCase().indexOf(str[x]) !== -1) {
            vcount++;
        }
    }
    return vcount > 0;
}


isVowel("a")            // true
isVowel("E")            // true
isVowel("")             // false
isVowel("b")            // false
isVowel("Y")            // false
isVowel(847)            // false
isVowel(-52)            // false
isVowel("4.3")          // false
isVowel("-362")         // false
isVowel(Infinity)       // false
isVowel(-Infinity)      // false
isVowel(0)              // false
isVowel("0")            // false
isVowel()               // false
isVowel(undefined)      // false
isVowel(null)           // false
isVowel(true)           // false
isVowel(false)          // false
isVowel(NaN)            // false

