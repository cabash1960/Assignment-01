import {
    calculateFactorials,
    celsiusToFahrenheit,
    doubleTheValues,
    evenNumbersWithin,
    findMultiples,
    findPrimeNumbers,
    oddNumbersWithin,
    sumOfNumbersTo,
} from './assignment.js'

if (sumOfNumbersTo && typeof sumOfNumbersTo === 'function') {
    console.log(sumOfNumbersTo(10))
}

if (evenNumbersWithin && typeof evenNumbersWithin === 'function') {
    console.log(evenNumbersWithin(10))
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function') {
    console.log(celsiusToFahrenheit([51.21, 23, 0, -55, 100]))
}

if (oddNumbersWithin && typeof oddNumbersWithin === 'function') {
    console.log(oddNumbersWithin(10))
}

if (findMultiples && typeof findMultiples === 'function') {
    console.log(findMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
}

if (calculateFactorials && typeof calculateFactorials === 'function') {
    console.log(calculateFactorials([0, 1, 2, 3, 4, 5]))
}

if (findPrimeNumbers && typeof findPrimeNumbers === 'function') {
    console.log(
        findPrimeNumbers([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
        ]),
    )
}

if (doubleTheValues && typeof doubleTheValues === 'function') {
    console.log(
        doubleTheValues([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
        ]),
    )
}

// const data = {
//   results: [
//     {
//       value: 709,
//       correctFunction: {
//         sum: 125670,
//         count: 355,
//         arrayOfEvenNumbers: [],
//       },
//     },
//   ],
//   info: {
//     seed: "d9220e5aed0dbc97",
//     results: "1",
//     page: "1",
//     version: "0.1",
//     time: { instruct: 13, generate: 11 },
//   },
// };

// const result = evenNumbersWithin(280);
// console.log(JSON.stringify(result, null, 2));
