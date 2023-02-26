// YOUR CODE BELOW
// Define a function, `mostVowels`, that accepts one argument, a string of words.

// `mostVowels` should return the word that has the most vowels.

// ```javascript
// mostVowels('I am a keeper with some real rhythms'); // => keeper
// ```

// If none of the words have any vowels, return an empty string.

// ```javascript
// mostVowels('try my gym'); // => ''
// ```

const mostVowels = (strOfWords) => {
    let currentWord = '';
    let vowelCount = 0;

    let maxWord = '';
    let maxVowelCount = 0;

    for (let i = 0; i < strOfWords.length; i++) {
        let char = strOfWords[i];

        if (char !== ' ' && i !== strOfWords.length - 1) {
            currentWord += char;

            if (isVowel(char)) {
                vowelCount += 1;
            }
        }
        else {
            if (vowelCount > maxVowelCount) {
                maxVowelCount = vowelCount;
                maxWord = currentWord;
            }

            currentWord = '';
            vowelCount = 0;
        }
    }
    return maxWord;

    function isVowel(char) {
        let vowels = 'aeiouAEIOU';

        if (vowels.indexOf(char) >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(mostVowels('I am a keeper with some real rhythms'));
console.log(mostVowels('try my gym'));