//You are given a string S. Find if the string, can be converted into a palindrome.

//You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

// Deletion or addition of characters is not allowed.

runProgram(`2
6
aabbcc
5
aabcd`
)
// aabbccd // a: 2 , b: 2 , c: 2, d: 1
// aabbccd
// abcdcba

function runProgram(input) {
    let ni = input.split('\n');
    let t = +ni[0];
    for (let a = 1; a <= t; a++){
        let str = ni[a * 2];
        let n = str.length;
        console.log(checkPalin(str, n));
    }
}

function checkPalin(str, n) { // aabbccd
    let obj = {};
    for (let i = 0; i < n; i++) { // a: 1
        if (obj[str[i]] === undefined) obj[str[i]] = 1;
        else obj[str[i]]++; // a: 2 , d:1
    }
    let count = 0;
    for (let key in obj) {
        if (obj[key] % 2 !== 0) count++;
    }
    if (count <= 1) return "Possible";
    else return "Not Possible";
}



























// runProgram(`1
// 8
// 39 27 11 4 24 32 32 1`);

// function runProgram(input) {
//     let ni = input.trim().split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(' ').map(Number)
//         let n = arr.length;
//         let prevSmalIndexes = prevSmaller(arr, n);
//         let nextSmalIndexes = nextSmaller(arr, n);
//         let str = "";
//         for (let i = 0; i < n; i++) {
//             if (prevSmalIndexes[i] === -1 && nextSmalIndexes[i] === -1) str += -1 + " ";
//             else if (prevSmalIndexes[i] !== -1 && nextSmalIndexes[i] === -1) str += arr[prevSmalIndexes[i]] + " ";
//             else if (prevSmalIndexes[i] === -1 && nextSmalIndexes[i] !== -1) str += arr[nextSmalIndexes[i]] + " ";
//             else {
//                 if (Math.abs(prevSmalIndexes[i] - i) <= Math.abs(nextSmalIndexes[i] - i)) {
//                     str += arr[prevSmalIndexes[i]] + " ";
//                 } else {
//                     str += arr[nextSmalIndexes[i]] + " ";
//                 }
//             }
//         }
//         console.log(str);

//     }
// }

// function prevSmaller(arr, n) {
//     let prevSmalIndexes = Array(n).fill(0);
//     prevSmalIndexes[0] = -1;
//     let stack = [0];
//     for (let i = 1; i < n; i++) {
//         while(arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
//             stack.pop();
//         }
//         if (stack.length === 0) prevSmalIndexes[i] = -1;
//         else prevSmalIndexes[i] = stack[stack.length - 1];
//         stack.push(i);
//     }
//     // console.log(prevSmalIndexes)
//     return prevSmalIndexes;
// }
// function nextSmaller(arr, n) {
//     let nextSmalIndexes = Array(n).fill(0);
//     nextSmalIndexes[n-1] = -1;
//     let stack = [n-1];
//     for (let i = n-2; i >= 0; i--) {
//         while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
//             stack.pop();
//         }
//         if (stack.length === 0) nextSmalIndexes[i] = -1;
//         else nextSmalIndexes[i] = stack[stack.length - 1];
//         stack.push(i);
//     }
//     // console.log(nextSmalIndexes);
//     return nextSmalIndexes;
// }

// runProgram(`3
// 2
// 1 2 0 0 1 1 6 6 4 1 6 1
// 3
// 0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
// 1
// 0 1 0 1 0 0`);

// function runProgram(input) {
//     let ni = input.trim().split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(" ").map(Number);
//         let n = arr.length;
//         console.log(checkMOM(arr, n));
//     }
// }
// function checkMOM(arr, n) {
//     let k = 1;
//     let countA = 0;
//     let countV = 0;
//     let flag = true;
//     for (let i = 0; i < n; i++) {
//         if (i > 6 * k - 1) {
//             k = k + 1;
//             flag = !flag;
//         }
//         if (flag) {
//             countA += arr[i];
//         } else {
//             countV += arr[i];
//         }
//         if (arr[i] === 1 || arr[i] === 3) flag = !flag;
//     }
//     if (countA === countV) return "Tie";
//     else if (countA > countV) return "AB de Villiers";
//     else return "Virat Kohli";
// }
