function VowelCount(word){
    var vowelCount = 0;

    return countVowels(0, vowelCount);

    function countVowels(stringIndex, vowelCount) {

        if(stringIndex === word.length){
            return "vowel count is: " + vowelCount;
        }

        if(word[stringIndex] === 'a' || word[stringIndex] === 'e' || word[stringIndex] === 'i' || word[stringIndex] === 'o' || word[stringIndex] === 'u'){
            return countVowels(stringIndex+1, vowelCount+1);
        } else{
            return countVowels(stringIndex+1, vowelCount);
        }
    }
}

console.log("Vowel Count");
console.log(VowelCount("abracadabraa"));

/**
 * @return {string}
 */
function Mumbling(str) {
    var strArray = [], letterArray = [], j=0;

    for(var i=0; i<=str.length-1; i++) strArray.push(i+1);

    while(j<strArray.length){
        var fullString = "";
        for(var k=0; k<strArray[j]; k++) k === 0 ? fullString += str[j].toUpperCase() : fullString += str[j].toLowerCase();

        if(j !== str.length-1){
            fullString += "-";
        }

        letterArray.push(fullString);
        j++;
    }

    return letterArray.join('');
}

console.log("");
console.log("Mumbling");
console.log(Mumbling("ZpglnRxqenU"));


// Given an array, find the int that appears an odd number of times.
//     There will always be only one integer that appears an odd number of times.

/**
 * @return {string}
 */
function FindOddInt(numArr) {
    var amountNumberAppearsObject = {};

    if(numArr.length === 1){
        return numArr[0];
    }
    for(var i=0; i<=numArr.length; i++){
        amountNumberAppearsObject.hasOwnProperty([numArr[i]]) ?
            amountNumberAppearsObject[numArr[i]]++ :
            amountNumberAppearsObject[numArr[i]] = 1;

    }

    for(var numberAppearValue in amountNumberAppearsObject){
        if(amountNumberAppearsObject[numberAppearValue] % 2 === 1 || amountNumberAppearsObject[numberAppearValue] === 1){
            return numberAppearValue;
        }
    }
}

console.log("");
console.log("Find Odd Integer");
console.log(FindOddInt([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(FindOddInt([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(FindOddInt([20,1,1,2,2,3,3,5,5,4,20,4,5]));
console.log(FindOddInt([10]));
console.log(FindOddInt([1,1,1,1,1,1,10,1,1,1,1]));
console.log(FindOddInt([5,4,3,2,1,5,4,3,2,10,10]));

/**
 * @return {string}
 */
function LeastAndGreatest(str) {
    var stringToNumberArray = str.split(' '),
        leastVal = Number(stringToNumberArray[0]),
        greatestVal = Number(stringToNumberArray[0]);

    for(var i=0; i<=stringToNumberArray.length-1; i++){
        var currentNumberPosition = Number(stringToNumberArray[i]);
        if(currentNumberPosition > greatestVal){
            greatestVal = currentNumberPosition;
        }else if(currentNumberPosition < leastVal){
            leastVal = currentNumberPosition;
        }
    }
    return (greatestVal + " " + leastVal);
}

console.log("");
console.log("Least And Greatest Values");
console.log(LeastAndGreatest("1 2 3 4 5"));


/**
 * @return {string}
 */
function CompDNA(dna) {

    if(dna.length <= 0){
        return "No DNA string to test";
    }

    var compDNAString = '';

    for(var i=0; i<=dna.length-1; i++){
        switch (dna[i]){
            case 'A':
                compDNAString += 'T';
                break;
            case 'T':
                compDNAString += 'A';
                break;
            case 'G':
                compDNAString += 'C';
                break;
            case 'C':
                compDNAString += 'G';
                break;
            default:
                break;
        }
    }

    return compDNAString;
}

console.log("");
console.log("Complementary DNA String");
console.log("DNA: " + CompDNA("ATTGC"));
console.log("DNA: " + CompDNA(""));

/**
 *
 * @param number
 * @return {number}
 * @constructor
 */

function SquareEveryDigit(number){
    var numberArr = String(number).split('');
    for(var i=0; i<=numberArr.length-1; i++){
        var numberOfIndex = Number(numberArr[i]);
        numberArr[i] = String(Math.pow(numberOfIndex, 2));
    }
    return Number(numberArr.join(''));
}
console.log("");
console.log("Square Every Digit");
console.log(SquareEveryDigit(9119));

/**
 *
 * @param str
 * @return {number}
 * @constructor
 */

function ShortestWord(str) {
    var splitStringArray = str.split(' '),
        shortestWord = splitStringArray[0].length;

    if(str.length === 1){
        return 1;
    }else if(str.length <= 0){
        return 0;
    }

    for(var i=1; i<=splitStringArray.length-1; i++){
        if(splitStringArray[i].length < shortestWord){
            shortestWord = splitStringArray[i].length;
        }
    }
    return shortestWord;
}

console.log("");
console.log("Shortest Word");
console.log(ShortestWord("bitcoin take over the world maybe who knows e"));


/**
 *
 * @param stringValue
 * @return {number}
 * @constructor
 */
function BothSidesEqual(stringValue) {
    var firstPointer = 0,
        secondPointer = stringValue.length-1,
        sumOne = stringValue[0],
        sumTwo = stringValue[stringValue.length-1];

    while(firstPointer < secondPointer){
        if(stringValue[firstPointer] < stringValue[secondPointer]){
            firstPointer++;
            sumOne += stringValue[firstPointer];
        }else if(stringValue[firstPointer] >= stringValue[secondPointer]){
            secondPointer--;
            sumTwo += stringValue[secondPointer];
        }

    }
    if(sumOne === sumTwo){
        return firstPointer;
    }else{

        return -1;
    }
}


console.log("");
console.log("Both Sides Equal");
console.log(BothSidesEqual([1,2,3,4,3,2,1]));
console.log(BothSidesEqual([1,100,50,-51,1,1]));
console.log(BothSidesEqual([1,2,3,4,5,6]));
console.log(BothSidesEqual([20,10,30,10,10,15,35]));

/**
 *
 * @param stringValue
 * @return {string}
 * @constructor
 */
function WhoLikesThis(stringValue) {
    var nameString = '';

    if(stringValue.length <= 0){
        return 'no one likes this';
    }else if(stringValue.length === 1){
        return stringValue[0] + ' likes this';
    }

    for(var i=0; i<2; i++){
        if(stringValue.length === 2 && i === 1){
            nameString += 'and ';
        }
        nameString += stringValue[i] + ' ';
    }

    if(stringValue.length <= 3){
        if(stringValue.length === 2) {
            nameString += 'like this';
        }else{
            nameString += 'and ' + stringValue[2] + ' like this';
        }
    }else{
        nameString += 'and ' + (stringValue.length - 2) + ' others like this';
    }

    return nameString;
}

//BEST PRACTICE ANSWER
function likes(names) {
    switch(names.length){
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
    }
}

console.log("");
console.log("Who Likes This?!");
console.log(WhoLikesThis([]));
console.log(WhoLikesThis(["Peter"]));
console.log(WhoLikesThis(["Jacob", "Alex"]));
console.log(WhoLikesThis(["Max", "John", "Mark"]));
console.log(WhoLikesThis(["Alex", "Jacob", "Mark", "Max"]));

console.log("");
var nameArray = ["Alex", "Jacob", "Mark", "Max"];
console.log(nameArray);
var removedVals = nameArray.splice(1,2);
console.log(nameArray);
console.log(removedVals);


function almostIncreasingSequence(sequence) {
    var temporaryArray = sequence;

    for(var i=0; i<=sequence.length-1; i++){
        sequence.splice(i,1);
        var splicedArr = sequence;
        // var sortedArr = sequence.sort(function(a,b){
        //     return a-b;
        // });

        console.log("spliced stringValue: " + splicedArr);
        console.log(sequence);

        // if(sortedArr === splicedArr){
        //     return true;
        // }
        splicedArr = temporaryArray;
        console.log("restarting stringValue" + splicedArr);
    }
    return false;
}

console.log("");
var nameArray = ["Alex", "Jacob", "Mark", "Max"];
console.log("almost increasing sequence");
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 4, 10, 4, 2]));


function SumOfTwoLowest(stringValue){
    var min = stringValue[0],
        large = stringValue[1];

    for(var i=0; i<=stringValue.length-1; i++){
        var temp = stringValue[i];
        if(temp < min){
            large = min;
            min = temp;
        }else if(temp > min && temp < large){
            large = temp;
        }
    }

    return large+min;
}

console.log("");
console.log("Sum of Two Lowest");
console.log(SumOfTwoLowest([19,5,42,2,77]));
console.log(SumOfTwoLowest([10,343445353,3453445,3453545353453]));

function RemoveMin(stringValue) {
    var min = stringValue[0];

    for(var i=1; i<=stringValue.length-1; i++){
        if(stringValue[i] < min){
            min = stringValue[i];
        }
    }

    for(var j=0; j<=stringValue.length-1; j++){
        if(stringValue[j] === min){
            stringValue.splice(j,1);
            break;
        }
    }

    return stringValue;
}

console.log("");
console.log("Remove Min");
console.log(RemoveMin([19,5,42,2,77]));

function DontGiveMeFive(start, end) {
    var newArr = [];

    for(var i=start; i<=end; i++){
        var numberString = String(i);
        if(!numberString.includes("5")){
            newArr.push(i);
        }
    }

    return newArr.length;
}

console.log("");
console.log("Don\'t Give Me 5!");
console.log(DontGiveMeFive(4,17));
console.log(DontGiveMeFive(1,9));
console.log(DontGiveMeFive(-16,11));


/**
 *
 * @param str
 * @return {boolean}
 * @constructor
 */

function ExesAndOhs(str) {
    var totalAmount = 0;

    if(!str.toLowerCase().includes('x') && !str.toLowerCase().includes('o')){
        return true;
    }else if(!str.toLowerCase().includes('x') || !str.toLowerCase().includes('o')){
        return false;
    }

    for(var i=0; i<=str.length-1; i++){
        if(str[i].toLowerCase() === 'x' || str[i].toLowerCase() === 'o'){
            totalAmount++;
        }
    }

    return totalAmount % 2 === 0;
}

console.log("");
console.log("Xs and Os");
console.log(ExesAndOhs("ooxx"));
console.log(ExesAndOhs("xooxx"));
console.log(ExesAndOhs("ooxXm"));
console.log(ExesAndOhs("zpzpzpp"));
console.log(ExesAndOhs("zzoo"));

console.log(Math.sqrt(114));

/**
 *
 * @param num
 * @return {number}
 * @constructor
 */

function FindPerfectSquare(num) {
    var squareRootOfNumVal = Math.sqrt(num);
    return String(squareRootOfNumVal).includes('.') ? -1:Math.pow((squareRootOfNumVal+1), 2);
}

console.log("");
console.log("Find Perfect Square");
console.log(FindPerfectSquare(121));
console.log(FindPerfectSquare(625));
console.log(FindPerfectSquare(114));

var val = [160, 3, 1719, 19, 11, 13, -21].filter(function (answer) {
    return answer % 2 === 0;
});
console.log('');
console.log(val);

/**
 * @param stringValue
 * @return {number}
 * @constructor
 */

function FindEvenOrOddVal(stringValue) {
    var isEven = false,
        count = 0;

    for(var i=0; i<=2; i++){
        var currentAnswer = stringValue[i] < 0 ? -stringValue[i] : stringValue[i];
        currentAnswer % 2 === 0 || currentAnswer === 0 ? count++ : count--;
    }
    isEven = count > 0;

    return stringValue.filter(function (answer) {return isEven ? answer % 2 !== 0 : answer % 2 === 0})[0];
}

console.log("");
console.log("Find Even or Odd Val");
console.log(FindEvenOrOddVal([0, 1, 2]));
console.log(FindEvenOrOddVal([1, 2, 3]));
console.log(FindEvenOrOddVal([2,6,8,10,3]));
console.log(FindEvenOrOddVal([0,0,3,0,0]));
console.log(FindEvenOrOddVal([1,1,0,1,1]));
console.log(FindEvenOrOddVal([160, 3, 1719, 19, 11, 13, -21]));
console.log(FindEvenOrOddVal([2, 4, 0, 100, 4, 11, 2602, 36]));

function DifferentArray(arrOne, arrTwo) {
    var i = 0;
    while(i < arrTwo.length){
        arrOne = arrOne.includes(arrTwo[i]) ? arrOne.filter(function (answer) { return answer !== arrTwo[i] }) : arrOne;
        i++;
    }
    return arrOne;
}

console.log("");
console.log("Array Different");
console.log(DifferentArray([1,2,2,2,3],[3]));
console.log(DifferentArray([0,1,2],[0]));

/**
 *
 * @param numVal
 * @param exponentVal
 * @return {Array}
 * @constructor
 */
function PlayWithDigits(numVal, exponentVal){
    var sum = 0;

    numVal.toString().split('').map(function (answer) {
        var numberValue = Number(answer);
        sum += Math.pow(numberValue, exponentVal);
        exponentVal++;
    });

    return sum < numVal || String(sum/numVal).includes('.') ? -1 : sum/numVal;
}

console.log("");
console.log("Playing With Numbers");
console.log(PlayWithDigits(89, 1));
console.log(PlayWithDigits(92, 1));
console.log(PlayWithDigits(695, 2));
console.log(PlayWithDigits(46288, 3));

/**
 *
 * @param phrase
 * @return {string}
 * @constructor
 */
function YourOrderPlease(phrase) {
    var stringArray = phrase.split(' '),
        finalString = [];

    if(phrase === "") return "";

    stringArray.map(function (answer, index) {
        var number = String(index+1), wordFound = false, j = 0;
        return finalString.push(searchForWord(wordFound, number, j));
    });
    return finalString.join(' ');

    function searchForWord(wordFound, numberVal, index) {
        if(wordFound) return stringArray[index];
        return stringArray[index].includes(numberVal) ? searchForWord(true, numberVal, index) : searchForWord(false, numberVal, index+1);
    }
}

console.log("");
console.log("Your Order Please!");
console.log(YourOrderPlease("is2 Thi1s T4est 3a"));

/**
 *
 * @param phrase
 * @return {string}
 * @constructor
 */
function Dubstep(phrase) {
    return phrase.split('WUB').filter(answer => { return answer !== '' }).join(' ');
}

console.log("");
console.log("DUBSTEP");
console.log(Dubstep("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
console.log(Dubstep("AWUBBWUBC"));
console.log(Dubstep("AWUBWUBWUBBWUBWUBWUBC"));
console.log(Dubstep("WUBAWUBBWUBCWUB"));

function UniqueInOrder(stringValue) {
    typeof stringValue[0] === 'number' ? stringValue.map((answer) => String(answer)).join(' ') : stringValue;
    let emptyArr = [],
        repeatedVal = stringValue[0];


    for(let i=0; i<=stringValue.length-1; i++){
        console.log(stringValue[i]);
        let currentVal = stringValue[i];
        if(currentVal !== repeatedVal){
            emptyArr.push(repeatedVal);
            repeatedVal = stringValue[i+1];
        }
    }
    return emptyArr;
}

console.log("");
console.log("Unique in order");
console.log(UniqueInOrder('AAAABBBCCDAABBB'));
console.log(UniqueInOrder('ABBCcAD'));
console.log(UniqueInOrder([1,2,2,3,3]));

function TwoInOne(stringOne, stringTwo) {
    let newArr = [],
        longerString = '',
        shorterString = '';

    if(stringOne.length < stringTwo.length){
        longerString = stringTwo;
        shorterString = stringOne;
    }else{
        longerString = stringOne;
        shorterString = stringTwo;
    }

    longerString.split('').map((answer, index) => {
        if(!newArr.includes(longerString[index])) newArr.push(longerString[index]);
        return newArr;
    });

    shorterString.split('').map((answer, index) => {
        if(!newArr.includes(shorterString[index])) newArr.push(shorterString[index]);
        return newArr;
    });

    return newArr.sort().join('');
}

console.log("");
console.log("Two to one");
console.log(TwoInOne("aretheyhere", "yestheyarehere"));
console.log(TwoInOne("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(TwoInOne("inmanylanguages", "theresapairoffunctions"));

/**
 *
 * @param strVal
 * @return {string}
 * @constructor
 */
function StopSpinningWord(strVal) {
    let finalString = [];

    let reverseString = (stringToReverse) => {
        return stringToReverse.length >= 5 ? stringToReverse.split('').reverse().join('') : stringToReverse;
    };

    let reverseStringWithoutBuiltInFunctions = (stringToReverse) => {
        let reverseString = '';
        for(let i=stringToReverse.length-1; i>=0; i--){
            reverseString += stringToReverse[i];
        }
        return reverseString;
    };

    if(!strVal.includes(' ') && strVal.length >= 5) return reverseString(strVal);

    strVal.split(' ').map((answer) => {
        answer.length >= 5 ? finalString.push(reverseStringWithoutBuiltInFunctions(answer)) : finalString.push(answer);
    });

    return finalString.join(' ');
}

console.log('');
console.log('Stop Spinning The Words!');
console.log(StopSpinningWord("Hey fellow wagitrriors"));
console.log(StopSpinningWord("This is a test"));
console.log(StopSpinningWord("This is another test"));
console.log(StopSpinningWord("fellow"));



































