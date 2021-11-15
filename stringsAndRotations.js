// Given two strings, find whether one string (s2) can be formed by rotating another string(s1).
// Example:For s1=”carbon”, s2=”boncar”, the output is "Yes" (without quotes)

runProgram(`carbon
boncar`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let str1 = ni[0].trim().split("");
    let str2 = ni[1];
    let n = str1.length;

    console.log(findRot(str1, str2, n));
}
function findRot(str1, str2, n) {
    for (let i = 0; i < n; i++) {
        let frnt = str1.shift();
        str1.push(frnt);
        str1 = str1.join("");
        if (str1 === str2) return "Yes";
        str1 = str1.split("");
    }
    return "No";
}


