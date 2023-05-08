// 백준 'n과 m' 문제

// 나의 풀이)

// -----문제 입력 세팅------ //
const fs = require("fs");
let input = fs.readFileSync("./input-nm.txt").toString().split(" ");

let n = +input[0]; // 1 ~ n까지 숫자를 나타내는 n
let m = +input[1]; // 뽑아야 하는 수의 갯수 m
// ------------------------- //

// 1. 1부터 n까지 자연수가 나열된 배열을 만들어 주어야 한다. 각 원소의 자료형은 string으로 한다. (nArr)
// 2. nArr에서 중복없이 m개의 원소를 뽑아 조합을 한다. (nmArr) - 사전 순으로 정렬되도록 한다.
// 3. nmArr의 각 원소를 하나씩 출력한다.

function solution(a, b) {
    let nArr = [];
    for (let i = 0; i < n; i++) {
        nArr.push((i + 1).toString());
    }

    if (b !== 0) {
    }
}

solution(n, m);
