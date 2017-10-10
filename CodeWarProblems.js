function VowelCount(word){
    let vowelCount = 0;

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
    let strArray = [], letterArray = [], j=0;

    for(let i=0; i<=str.length-1; i++) strArray.push(i+1);

    while(j<strArray.length){
        let fullString = "";
        for(let k=0; k<strArray[j]; k++) k === 0 ? fullString += str[j].toUpperCase() : fullString += str[j].toLowerCase();

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
 *
 * @param numArr
 * @return {*}
 * @constructor
 */
function FindOddInt(numArr) {
    let amountNumberAppearsObject = {};

    if(numArr.length === 1){
        return numArr[0];
    }
    for(let i=0; i<=numArr.length; i++)
        amountNumberAppearsObject.hasOwnProperty([numArr[i]]) ?
        amountNumberAppearsObject[numArr[i]]++ :
        amountNumberAppearsObject[numArr[i]] = 1;

    for(let numberAppearValue in amountNumberAppearsObject){
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
    let stringToNumberArray = str.split(' '),
        leastVal = Number(stringToNumberArray[0]),
        greatestVal = Number(stringToNumberArray[0]);

    for(let i=0; i<=stringToNumberArray.length-1; i++){
        let currentNumberPosition = Number(stringToNumberArray[i]);
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

    let compDNAString = '';

    for(let i=0; i<=dna.length-1; i++){
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
    let numberArr = String(number).split('');
    for(let i=0; i<=numberArr.length-1; i++){
        let numberOfIndex = Number(numberArr[i]);
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
    let splitStringArray = str.split(' '),
        shortestWord = splitStringArray[0].length;

    if(str.length === 1){
        return 1;
    }else if(str.length <= 0){
        return 0;
    }

    for(let i=1; i<=splitStringArray.length-1; i++){
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
    let firstPointer = 0,
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
    let nameString = '';

    if(stringValue.length <= 0){
        return 'no one likes this';
    }else if(stringValue.length === 1){
        return stringValue[0] + ' likes this';
    }

    for(let i=0; i<2; i++){
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
// function likes(names) {
//     switch(names.length){
//         case 0:
//             return "no one likes this";
//         case 1:
//             return names[0] + " likes this";
//         case 2:
//             return names[0] + " and " + names[1] + " like this";
//         case 3:
//             return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//         default:
//             return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
//     }
// }

console.log("");
console.log("Who Likes This?!");
console.log(WhoLikesThis([]));
console.log(WhoLikesThis(["Peter"]));
console.log(WhoLikesThis(["Jacob", "Alex"]));
console.log(WhoLikesThis(["Max", "John", "Mark"]));
console.log(WhoLikesThis(["Alex", "Jacob", "Mark", "Max"]));

console.log("");
let nameArray = ["Alex", "Jacob", "Mark", "Max"];
console.log(nameArray);

function almostIncreasingSequence(sequence) {
    let sequenceArray = sequence;

    for(let i=0; i<=sequence.length-1; i++){
        sequence.splice(i,1);
        let splicedArr = sequence;
        // let sortedArr = sequence.sort(function(a,b){
        //     return a-b;
        // });

        console.log("spliced stringValue: " + splicedArr);
        console.log(sequence);

        // if(sortedArr === splicedArr){
        //     return true;
        // }
        splicedArr = sequenceArray;
        console.log("restarting stringValue" + splicedArr);
    }
    return false;
}

console.log("");
console.log("almost increasing sequence");
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 4, 10, 4, 2]));


function SumOfTwoLowest(stringValue){
    let min = stringValue[0],
        large = stringValue[1];

    for(let i=0; i<=stringValue.length-1; i++){
        let temp = stringValue[i];
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
    let min = stringValue[0];

    for(let i=1; i<=stringValue.length-1; i++){
        if(stringValue[i] < min){
            min = stringValue[i];
        }
    }

    for(let j=0; j<=stringValue.length-1; j++){
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
    let newArr = [];

    for(let i=start; i<=end; i++){
        let numberString = String(i);
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
    let totalAmount = 0;

    if(!str.toLowerCase().includes('x') && !str.toLowerCase().includes('o')){
        return true;
    }else if(!str.toLowerCase().includes('x') || !str.toLowerCase().includes('o')){
        return false;
    }

    for(let i=0; i<=str.length-1; i++){
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
    let squareRootOfNumVal = Math.sqrt(num);
    return String(squareRootOfNumVal).includes('.') ? -1:Math.pow((squareRootOfNumVal+1), 2);
}

console.log("");
console.log("Find Perfect Square");
console.log(FindPerfectSquare(121));
console.log(FindPerfectSquare(625));
console.log(FindPerfectSquare(114));

/**
 * @param stringValue
 * @return {number}
 * @constructor
 */

function FindEvenOrOddVal(stringValue) {
    let isEven = false,
        count = 0;

    for(let i=0; i<=2; i++){
        let currentAnswer = stringValue[i] < 0 ? -stringValue[i] : stringValue[i];
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
    let i = 0;
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
 * @return {number}
 * @constructor
 */
function PlayWithDigits(numVal, exponentVal){
    let sum = 0;

    numVal.toString().split('').map(function (answer) {
        let numberValue = Number(answer);
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
    let stringArray = phrase.split(' '),
        finalString = [];

    if(phrase === "") return "";

    stringArray.map(function (answer, index) {
        let number = String(index+1), wordFound = false, j = 0;
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

/**
 *
 * @param stringOne
 * @param stringTwo
 * @return {string}
 * @constructor
 */
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

/**
 *
 * @param dupStr
 * @return {number}
 * @constructor
 */
function CountDuplicateAmount(dupStr) {
    let dupAmount = 0,
        i = 0,
        dupLetters = [];

    if(dupStr.length === 0) return 0;

    while (i <= dupStr.length-1){
        let currentVal = dupStr[i], j = i+1;

        if(typeof currentVal === 'string') currentVal.toLowerCase();

        while(j <= dupStr.length-1 && !dupLetters.includes(currentVal)){
            let nextVal = dupStr[j];

            if(typeof nextVal === 'string') nextVal = nextVal.toLowerCase();

            if(currentVal === nextVal && !dupLetters.includes(currentVal)){
                dupLetters.push(nextVal);
                dupAmount++;
            }
            j++;
        }
        i++;
    }
    return dupAmount;
}

console.log('');
console.log('Count Amount of Duplicates');
console.log(CountDuplicateAmount(""));
console.log(CountDuplicateAmount("abcde"));
console.log(CountDuplicateAmount("aabBcde"));
console.log(CountDuplicateAmount("Indivisibility"));
console.log(CountDuplicateAmount("Indivisibilities"));

function LargestPair(numVal) {
    let sortedDupArray = [];
    numVal = numVal.toString();
    for(let i=0; i<numVal.length-1; i++){
        let duplicateVal = Number(numVal[i] + numVal[i+1]);
        sortedDupArray.push(duplicateVal);
    }
    sortedDupArray.sort((a,b) => { return a-b; });
    return sortedDupArray[sortedDupArray.length-1];
}

console.log('');
console.log('Largest Pair');
console.log(LargestPair(453857));
console.log(LargestPair(363223311));

/**
 *
 * @param strArr
 * @return {string}
 * @constructor
 */
function ArrayMatching(strArr) {
    let sumArr = [],
        shortArr = strArr[0].slice(1,-1).split(', '),
        largeArr = strArr[1].slice(1,-1).split(', '),
        difference = 0;

    if(shortArr.length !== largeArr.length){
        if(shortArr.length > largeArr.length){
            let temp = largeArr;
            largeArr = shortArr;
            shortArr = temp;
        }

        difference = largeArr.length - shortArr.length;
        for(let i=0; i<difference; i++){
            shortArr.push('0');
        }
    }

    largeArr.map(function (answer, index) {
        let sum = Number(answer) + Number(shortArr[index]);
        sumArr.push(sum);
    });
    return sumArr.join('-');
}

console.log('');
console.log('Array Matching');
console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));
console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]));
console.log(ArrayMatching(["[1, 2, 12, 1, 5, 2]", "[1, 5, 2]"]));

/**
 *
 * @param iqString
 * @return {number}
 * @constructor
 */
function IQTest(iqString) {
    let isEven,
        count = 0;
    iqString = iqString.split(' ');
    for(let i=0; i<=iqString.length-1; i++)
        Number(iqString[i]) % 2 === 0 ? count ++ : count --;

    isEven = count > 1;

    let filteredArr = iqString.filter(function (element) {
        return isEven ? Number(element) % 2 !== 0 : Number(element) % 2 === 0;
    });

    return iqString.indexOf(filteredArr[0]) + 1;
}

console.log('');
console.log('IQ Test');
console.log(IQTest("2 4 7 8 10"));
console.log(IQTest("1 2 1 1"));

/**
 *
 * @param consecArr
 * @param k
 * @return {string}
 * @constructor
 */
function LongestConsecString(consecArr, k) {
    if(consecArr.length === 0 || k > consecArr.length || k <= 0){
        return '';
    }

    let longestStringAmt = 0,
        longestString = '';

    for(let i=0; i<=consecArr.length-k; i++){
        let currentSum = 0,
            currentString = '';

        for(let j=0; j<k; j++){
            currentString += consecArr[i+j];
            currentSum += consecArr[i+j].length;
        }


        if(currentSum > longestStringAmt){
            longestStringAmt = currentSum;
            longestString = currentString;
        }
    }

    return longestString;
}

// console.log('');
// console.log('Longest Consecutive String');
// console.log(LongestConsecString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));

console.log('');
console.log('Longest Consecutive String');
console.log(LongestConsecString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)); //"abigailtheta"
console.log(LongestConsecString(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); //"oocccffuucccjjjkkkjyyyeehh"
console.log(LongestConsecString([], 3)); //""
console.log(LongestConsecString(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(LongestConsecString(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); // "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(LongestConsecString(["zone", "abigail", "theta", "form", "libe", "zas"], -2)); // ""
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //"ixoyx3452zzzzzzzzzzzz"
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)); // ""
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""

//these are the unit tests from code wars
console.log(LongestConsecString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta");
console.log(LongestConsecString(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
console.log(LongestConsecString([], 3) === "");
console.log(LongestConsecString(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(LongestConsecString(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(LongestConsecString(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === "");
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz");
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === "");
console.log(LongestConsecString(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "");


/**
 *
 * @param num
 * @return {boolean}
 * @constructor
 */
function YouAreASquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

console.log('');
console.log('You\'re A Square!');
console.log(YouAreASquare(-1));
console.log(YouAreASquare(3) );
console.log(YouAreASquare(4) );
console.log(YouAreASquare(25));
console.log(YouAreASquare(26));

/**
 *
 * @param stringVal
 * @return {*}
 * @constructor
 */
function ShortestString(stringVal) {
    let shortestAmt;
    if(stringVal.length === 0){
        return 0;
    }else if(!stringVal.includes(' ')){
        return stringVal.length;
    }

    stringVal = stringVal.split(' ');
    shortestAmt = stringVal[0].length;
    stringVal.map((answer) => {
        if(answer.length < shortestAmt)
            shortestAmt = answer.length;
    });

    return shortestAmt;
}

/**
 *
 * @param stringVal
 * @return {*}
 * @constructor
 */
function BestPracticeForShortestString(stringVal) {
    return Math.min.apply(null,stringVal.split(' ').map(w => w.length));
}

console.log('');
console.log('Shortest String');
console.log(ShortestString("bitcoin take over the world maybe who knows perhaps"));
console.log(ShortestString("turns out random test cases are easier than writing out basic ones"));
console.log('Best Practice For Shortest String');
console.log(BestPracticeForShortestString("bitcoin take over the world maybe who knows perhaps"));
console.log(BestPracticeForShortestString("turns out random test cases are easier than writing out basic ones"));

function FindSmallestInArray(smallestArr) {
    return smallestArr.sort((a,b) => {
        return b-a;
    }).pop();
}

/**
 *
 * @param smallestArr
 * @return {*}
 * @constructor
 */
function BestPracticeForFindSmallestInArray(smallestArr) {
    // what this does is that it applies Math.min function to the array
    // This about equal to Math.min(numbers[0], ...)
    // or Math.min(arg1, arg2, ...)
    return Math.min.apply(null, smallestArr);
}


console.log('');
console.log('Find Smallest Value In Array');
console.log(FindSmallestInArray([78,56,232,12,8]) === 8);
console.log(FindSmallestInArray([78,56,232,12,18]) === 12);
console.log(FindSmallestInArray([78,56,232,412,228]) === 56);
console.log(FindSmallestInArray([78,56,232,12,0]) === 0);
console.log(FindSmallestInArray([1,56,232,12,8]) === 1);

console.log('Best Practice Find Smallest Value In Array');
console.log(BestPracticeForFindSmallestInArray([78,56,232,12,8]) === 8);
console.log(BestPracticeForFindSmallestInArray([78,56,232,12,18]) === 12);
console.log(BestPracticeForFindSmallestInArray([78,56,232,412,228]) === 56);
console.log(BestPracticeForFindSmallestInArray([78,56,232,12,0]) === 0);
console.log(BestPracticeForFindSmallestInArray([1,56,232,12,8]) === 1);

/**
 *
 * @param n
 * @return {number}
 * @constructor
 */
function SumOfOddIntegers(n) {
    let sum = 0,
        currentNum = (n*(n-1))+1;

    if(n === 0) return 0;

    for(let i=0; i<n; i++){
        sum += currentNum;
        currentNum += 2;
    }

    return sum;
}

console.log('');
console.log('Sum of Odd Integers');
console.log(SumOfOddIntegers(1));
console.log(SumOfOddIntegers(42));
console.log(SumOfOddIntegers(54));
console.log(SumOfOddIntegers(433));

function UniqueInOrder(stringValue) {
    if(typeof stringValue === 'string'){
        stringValue = stringValue.split('');
    }

    for(let i=0; i<=stringValue.length-1; i++){
        let currentIndex = stringValue[i];
        if(stringValue[i-1] === currentIndex && stringValue[i+1] === currentIndex){
            stringValue.splice(i,2);
            i = i-1; //must go back one to recheck
        }else if(stringValue[i-1] === currentIndex && stringValue[i+1] !== currentIndex){
            stringValue.splice(i,1);
        }
    }
    return stringValue;
}

function BestPracticeForUniqueInOrder(stringValue) {
    if(typeof stringValue === 'string') stringValue = stringValue.split('');

    let res = [];
    for (let i = 0; i < stringValue.length; i++) {
        // pushes to array only if the current value doesn't equal the next value
        if (stringValue[i] !== stringValue[i+1])
            res.push(stringValue[i]);
    }
    return res;
}

console.log('');
console.log('Unique In Order');
console.log(UniqueInOrder('AAaAAABBBCCDAABBB'));
console.log(UniqueInOrder('ABBCcAD'));
console.log(UniqueInOrder([1,1,1,2,2,3,3]));

console.log('Best Practices For Unique In Order');
console.log(BestPracticeForUniqueInOrder('AAaAAABBBCCDAABBB'));
console.log(BestPracticeForUniqueInOrder('ABBCcAD'));
console.log(BestPracticeForUniqueInOrder([1,1,1,2,2,3,3]));

function MoveZerosToEnd(arrayWithZeros) {
    let amountOfZeros = 0;

    if(arrayWithZeros.length <= 0){
        return [];
    }

    for(let i=0; i<=arrayWithZeros.length-1; i++){
        if(arrayWithZeros[i] === 0){
            amountOfZeros++;
            arrayWithZeros.splice(i,1);
            i=i-1; // must go back to last index to check
        }
    }

    if(amountOfZeros > 0){
        for(let i=0; i<amountOfZeros; i++){
            arrayWithZeros.push(0);
        }
    }

    return arrayWithZeros;
}

console.log('');
console.log('Move Zeros To End');
console.log(MoveZerosToEnd([1,2,0,1,0,1,0,3,0,1]));
console.log(MoveZerosToEnd(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]));
console.log(MoveZerosToEnd([false,1,0,1,2,0,1,3,"a"]));

/**
 *
 * @param setArray
 * @return {number}
 * @constructor
 */
function PowerSetCount(setArray) {
    return Math.pow(2, setArray.length);
}

console.log('');
console.log('Power Set count');
console.log(PowerSetCount([1, 2, 3, 4]));
console.log(PowerSetCount([5, 6]));

/**
 *
 * @param sumArray
 * @return {boolean}
 * @constructor
 */
function SumMultiplier(sumArray) {
    let sumValue = 0;
    sumArray = sumArray.sort(function (a, b) { return a-b; });
    sumArray.map(function (element) {
        sumValue += element;
    });

    sumValue *= 2;
    console.log(sumValue);
    console.log(sumArray);

    for(let i=0; i<sumArray.length-1; i++){
        let currentMultiplierValue = sumArray[sumArray.length-1] * sumArray[i];
        console.log(currentMultiplierValue);
        if(currentMultiplierValue > sumValue) return true;
    }
    return false;
}

console.log('');
console.log('Sum Multiplier');
console.log(SumMultiplier([2, 2, 2, 2, 4, 1]));
console.log(SumMultiplier([4, 5, 5, 5, 12]));
console.log(SumMultiplier([1, 1, 2, 10, 3, 1, 12]));

/**
 *
 * @param numVal
 * @return {boolean}
 * @constructor
 */
function PrimeTime(numVal) {
    if(numVal === 1){
        return false;
    }else if(numVal <= 3 || numVal === 5 || numVal === 7){
        return true;
    }

    for(let i=4; i<=10; i++){
        if(numVal % i === 0)
            return false;
    }

    return true;
}

console.log('');
console.log('Prime Time');
console.log(PrimeTime(19));
console.log(PrimeTime(110));

/**
 *
 * @param sumArray
 * @return {boolean}
 * @constructor
 */
function ArrayAddition(arr) {
    // if(sumArray.length === 0 || sumArray.length === 1 || sumArray.length === 2){
    //     return false;
    // }
    //
    // let sumIsLess = true,
    //     largestVal;
    //
    // sumArray = sumArray.sort(function (a, b) { return a-b; });
    // console.log(sumArray);
    // largestVal = sumArray[sumArray.length-1];
    //
    // for(let i=0; i<sumArray.length-1; i++){
    //     let currentSum = sumArray[i],
    //         j = sumArray.length - 2;
    //
    //     sumIsLess = true;
    //
    //     while(j > i && sumIsLess){
    //         currentSum += sumArray[j];
    //         console.log(currentSum);
    //
    //         if(currentSum > largestVal){
    //             sumIsLess = false;
    //         }else if(currentSum === largestVal){
    //             return true;
    //         }
    //         j--;
    //     }
    // }
    // return false;

    const max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1);
    for (let i = 0; i < arr.length; i++) {
        let runningSum = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i === j) { continue; }
            runningSum += arr[j];
            if (runningSum === max) {
                return true;
            }
        }
    }
    // code goes here
    return false;
}

console.log('');
console.log('Array Addition');
console.log(ArrayAddition([5,7,16,1,2]));
console.log(ArrayAddition([3,5,-1,8,12]));

/**
 *
 * @param str
 * @return {number}
 * @constructor
 */

function LetterCount(str) {
    let amountOfWordsArr = [],
        max,
        word;

    str = str.split(' ');

    for(let i=0; i<=str.length-1; i++){
        let maxCount = 0,
            currentAmount = 1,
            j = 0;

        while (j <= str[i].length-1){
            let k = j+1;
            while (k <= str[i].length-1){
                if(str[i][j] === str[i][k])
                    currentAmount++;
                k++;
            }
            if(currentAmount > maxCount)
                maxCount = currentAmount;

            j++;
        }

        amountOfWordsArr.push({
            "word": str[i],
            "maxAmount": maxCount
        });
    }

    max = amountOfWordsArr[0].maxAmount;
    word = amountOfWordsArr[0].word;
    amountOfWordsArr.map(function (element) {
       if(element.maxAmount > max)
           max = element.maxAmount;
           word = element.word;

    });

    return max > 1 ? word : -1;
}

console.log('');
console.log('Letter Count');
console.log(LetterCount("Hello apple pie"));
console.log(LetterCount("No words"));


/**
 *
 * @param num
 * @return {number}
 * @constructor
 */
function PrimeMover(num) {
    let count = 4,
        currentNum = 7;

    if(num === 1){
        return 2;
    }else if(num === 2){
        return 3;
    }else if(num === 3){
        return 5;
    }

    while(count <= num || count <= 10000){
        let isPrime = true;
        currentNum++;

        for(let i=2; i<currentNum; i++){
            if(currentNum % i === 0)
                isPrime = false;
        }

        if(isPrime)
            count++;

        if(count === num)
            return currentNum;

    }

    return -1;
}

console.log('');
console.log('Prime Mover');
console.log(PrimeMover(1));
console.log(PrimeMover(9));
console.log(PrimeMover(100));

/**
 *
 * @param modeArray
 * @return {number}
 * @constructor
 */

function SimpleMode(modeArray) {
    let numOfAppearArrary = [],
        maxAmount,
        maxNumber;

    for(let i=0; i<=modeArray.length-1; i++){
        let currentNumber = modeArray[i],
            totalAmountOfAppearances = 1,
            j = i+1;
        while (j <= modeArray.length-1){
            if(currentNumber === modeArray[j])
                totalAmountOfAppearances++;
            j++;
        }
        numOfAppearArrary.push({
            "number": currentNumber,
            "amount": totalAmountOfAppearances
        })
    }

    maxAmount = numOfAppearArrary[0].amount;
    maxNumber = numOfAppearArrary[0].number;

    for(let i=1; i<=numOfAppearArrary.length-1; i++){
        if(numOfAppearArrary[i].amount > maxAmount){
            maxAmount = numOfAppearArrary[i].amount;
            maxNumber = numOfAppearArrary[i].number;
        }
    }


    return maxAmount > 1 ? maxNumber : -1;
}

console.log('');
console.log('Simple Mode');
console.log(SimpleMode([5,5,2,2,1]));
console.log(SimpleMode([3,4,1,6,10]));

/**
 *
 * @param str
 * @param num
 * @return {string}
 * @constructor
 */
function CaesarCipher(str, num) {
    let newString = '';

    if(str === '' || num === 0)
        return str;


    for(let i=0; i<=str.length-1; i++){
        let currentCharCode = str.codePointAt(i);
        if(str[i].match(/[A-Z]/)){
            currentCharCode = (currentCharCode + num) > 90 ? ((currentCharCode+num) - 90) + 64 : currentCharCode + num;
        }else if( str[i].match(/[a-z]/)){
            currentCharCode = (currentCharCode + num) > 122 ? currentCharCode = ((currentCharCode+num) - 122) + 96 : currentCharCode + num;
        }
        newString += String.fromCodePoint(currentCharCode);
    }

    return newString;
}

console.log('');
console.log('Caesar Cipher');
console.log(CaesarCipher("Hello akd", 4));
console.log(CaesarCipher("abc", 0));
console.log(CaesarCipher("abc", 1));
console.log(CaesarCipher("coderBYTE", 2));
console.log(CaesarCipher("coderBzZ", 2));

function ThirdGreatest(strArray) {
    strArray.sort(function(a, b) {
        return b.length - a.length
    });

    //don't need to splice array since you only care about one variable
    return strArray[2];
}

console.log('');
console.log('Third Greatest');
console.log(ThirdGreatest(["coder","byte","code"]));
console.log(ThirdGreatest(["abc","defg","z","hijk"]));
console.log(ThirdGreatest(["hello","world","world"]));

/**
 *
 * @param num1
 * @param num2
 * @return {*}
 * @constructor
 */
function GCF(num1, num2) {
    let larger = num1,
        smaller = num2,
        remainder;

    if(num1 === num2){
        return 1;
    }else if(num2 > num1){
        larger = num2;
        smaller = num1
    }

    remainder = larger % smaller;
    return remainder === 0 ? smaller : remainder;
}

console.log('');
console.log('GCF');
console.log(GCF(8,8));
console.log(GCF(8,16));
console.log(GCF(100,8));
console.log(GCF(100,50));

/**
 *
 * @param strValue
 * @return {string}
 * @constructor
 */
function RunLength(strValue) {
    let letterAmountObject = [],
        current = 1;

    for(let i=0; i<=strValue.length-1; i++){
        if(strValue[i] !== strValue[i+1]){
            let stringForLetterAmt = current+''+strValue[i];
            letterAmountObject.push(stringForLetterAmt);
            current = 1;
        }else{
            current++;
        }
    }
    return letterAmountObject.join('');
}

console.log('');
console.log('Run Length');
console.log(RunLength("aabbcde"));
console.log(RunLength("wwwbbbw"));

/**
 *
 * @param arthGeoArr
 * @return {*}
 * @constructor
 */
function ArithGeoTwo(arthGeoArr) {
    let isArithmetic = false,
        isGeometric = false;

    for(let i=1; i<arthGeoArr.length-1; i++){
        let prev = arthGeoArr[i-1],
            current = arthGeoArr[i],
            next = arthGeoArr[i+1];

        if((current-prev === next-current) && isGeometric === false){
            isArithmetic = true;
        }else if((current/prev === next/current) && isArithmetic === false){
            isGeometric = true;
        }else{
            return -1;
        }
    }

    if(isArithmetic){
        return 'Arithmetic';
    }else if(isGeometric){
        return 'Geometric';
    }
}

console.log('');
console.log('Arth Geo II');
console.log(ArithGeoTwo([5,10,15]));
console.log(ArithGeoTwo([2,4,16,24]));
console.log(ArithGeoTwo([2, 6, 18, 54]));
console.log(ArithGeoTwo([1,2,3,100]));

/**
 *
 * @param twoSumArr
 * @return {string}
 * @constructor
 */
function TwoSum(twoSumArr) {
    let goal = twoSumArr.shift(),
        arrOfPairs = [];

    for(let i=0; i<=twoSumArr.length-1; i++){
        let current = twoSumArr[i],
            j = i+1;
        while(j <= twoSumArr.length-1){
            let sum = current + twoSumArr[j];
            if(sum === goal){
                arrOfPairs.push([current, twoSumArr[j]]);
            }
            j++;
        }
    }

    return arrOfPairs.length > 0 ? arrOfPairs.join(' ') : -1;
}

console.log('');
console.log('Two Sum');
console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]));
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12]));

/**
 *
 * @param tripletArr
 * @return {*}
 * @constructor
 */
function ThreeSum(tripletArr) {
    let goal = tripletArr.shift();

    if(tripletArr.length < 4)
        return false;

    for(let i=0; i<=tripletArr.length-1; i++){
        let current = tripletArr[i],
            j = i+1;

        while(j <= tripletArr.length-1){
            let k = j+1;
                while(k <= tripletArr.length - 1){
                    let sum = current + tripletArr[j] + tripletArr[k];
                    if(sum === goal)
                        return true;
                    k++;
                }
            j++;
        }
    }
    return false;
}

console.log('');
console.log('Triple Arr');
console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]));
console.log(ThreeSum([12, 3, 1, -5, -4, 7]));
console.log(ThreeSum([64, 3, 50, 45, 32, 14, 50, 45, 31, 66, 22, 15, 16, 20]));
console.log(ThreeSum([10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 8, -2, -2, -2, -2, -1, 7]));














