// 백준 'card2' 문제

// 나의 풀이1 - 실패)

// -----문제 입력 세팅------ //
const fs = require("fs");

let input = fs.readFileSync("./input-card2.txt").toString();
let inputNum = +input;
// ------------------------- //

function solution(n) {
    let count = 0;
    let numArr = [];

    for (let i = 0; i < n; i++) {
        numArr.push(i + 1);
    }

    while (numArr.length > 1) {
        if (count % 2 === 0) {
            numArr = [...numArr.slice(1)];
            count += 1;
        }

        if (count % 2 !== 0) {
            let tempArr = [];
            let tempNum = numArr[0];

            for (let j = 0; j < numArr.length; j++) {
                if (numArr[j] !== numArr[0]) {
                    tempArr.push(numArr[j]);
                }
            }

            numArr = [...tempArr, tempNum];
            count += 1;
        }
    }

    console.log(numArr[0]);
    return numArr[0];
}

solution(inputNum);

// 결과 - 실패
// 원인 - 메모리 초과
