// 백준 'card2' 문제

// 나의 풀이1 - 실패)

// -----문제 입력 세팅------ //
const fs = require("fs");

let input = fs.readFileSync("./input-card2.txt").toString();
let inputNum = +input;
// ------------------------- //

// 입력되는 데이터의 숫자가 클수록 for문을 도는 데 많은 시간이 들고 많은 메모리를 잡아먹는다.
// 문제에 제시된 메모리 제한은 128MB
// n의 크기는 1 ~ 500,000
// 자바스크립트는 숫자형 데이터의 경우 number 하나 당 8bytes의 공간을 확보한다.
// 즉, n의 크기가 커지면 커질수록 메모리 낭비가 엄청 심해진다.
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
            let tempNum = numArr[0];

            numArr = [...numArr.splice(1), tempNum];
            count += 1;
        }
    }

    console.log(numArr[0]);
    return numArr[0];
}

solution(inputNum);

// 결과 - 실패
// 원인 - 메모리 초과
