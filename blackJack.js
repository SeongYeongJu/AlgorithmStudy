// 백준 '블랙잭' 문제

// 나의 풀이)

// -----문제 입력 세팅------ //
const fs = require("fs");
// 백준에 문제 제출을 하기 위해서는 "./input-blackJack.txt" 이 부분을 "/dev/stdin"으로 바꿔줘야 한다.
let input = fs.readFileSync("./input-blackJack.txt").toString().split("\n");

let cardNum = +input[0].split(" ")[0];
let maxSum = +input[0].split(" ")[1];
let pickedNum = [];

for (let i = 0; i < cardNum; i++) {
  pickedNum.push(+input[1].split(" ")[i]);
}
// ------------------------- //

function solution(n, m, arr) {
  let answer = 0;
  let sumArr = [];

  // N장의 카드중에서 3장을 골라 더해야 한다.
  // 따라서 3중 for문으로 각각의 인덱스를 설정하면 쉽게 구현할 수 있다.
  // 그러나 시간복잡도 측면에서 좋지 않을 거 같다.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = arr[i] + arr[j] + arr[k];

        // sum은 최댓값이 m이므로 m 이하의 수만 배열에 넣는다.
        if (sum <= m) {
          sumArr.push(sum);
        }
      }
    }
  }

  // sumArr중 가장 큰 수를 뽑기 위해 오름차순 정렬한다.
  sumArr.sort((a, b) => a - b);

  answer = sumArr[sumArr.length - 1];

  console.log(answer);
  return answer;
}

// 실행
solution(cardNum, maxSum, pickedNum);

// 결과 - 정답
// 메모리 - 16964KB
// 시간 - 252ms
// 코드 길이 - 731B
