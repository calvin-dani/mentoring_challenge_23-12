
const fsLibrary = require('fs')

function makeDictionary() {
    let dictionary = {}
    let words = fsLibrary.readFileSync('english_words.txt');

    let wordStr = words.toString();
    let wordArr = wordStr.split('\n');
    for (let word of wordArr) {
        dictionary[word] = 1;
    }
    return dictionary
}

function makeKeyStroke() {
    let keyArr = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    return keyArr;
}

function keypadToWords(keyStrokes) {
    let dictionary = makeDictionary();
    let keyStrokesObj = makeKeyStroke();
    resArr = keypadHelper(dictionary, keyStrokes, keyStrokesObj, '', []);
    console.log(resArr);
    return resArr;
}

function keypadHelper(dictionary, keyStrokes, keyStrokesObj, word, allWordArr) {
    
    if (keyStrokes.length == 0) {
        if (dictionary.hasOwnProperty(word)) {
            allWordArr.push(word);
        }
        return;
    }

    let keyArr = keyStrokesObj[keyStrokes[0]];

    for (let letter of keyArr) {
        word += letter;
        keypadHelper(dictionary, keyStrokes.slice(1), keyStrokesObj, word,allWordArr);
        word = word.substring(0, word.length - 1);
    }

    return allWordArr;
}

