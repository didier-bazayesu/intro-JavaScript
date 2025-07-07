function getGoalsFromString(str) {
    const numberWords = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10
    };

    const lowerStr = str.toLowerCase();
    const result = [];

    for (const word in numberWords) {
        if (lowerStr.includes(word)) {
            result.push(numberWords[word]);
            if (result.length === 2) break;
        }
    }

    return result.length === 2 ? result : null;
}
