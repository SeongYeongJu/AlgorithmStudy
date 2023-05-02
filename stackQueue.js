// 프로그래머스 '스택/큐 - 올바른 괄호' 문제

// 나의 풀이) - 실패 코드

function solution(s) {
  var answer = true;
  let stringArr = [...s];
  let startStrArr = [];
  let endStrArr = [];
  let same = 1;
  let prevSame = 0;

  if (stringArr.length % 2 !== 0) {
    answer = false;
    return answer;
  }

  if (stringArr[0] !== "(" || stringArr[stringArr.length - 1] !== ")") {
    answer = false;
    return answer;
  }

  stringArr.forEach((item) => {
    if (item === "(") {
      startStrArr.push(1);
    }

    if (item === ")") {
      endStrArr.push(1);
    }
  });

  if (startStrArr.length !== endStrArr.length) {
    answer = false;
    return answer;
  }

  for (let i = 0; i < stringArr.length - 1; i++) {
    if (stringArr[i] !== stringArr[i + 1]) {
      prevSame = same;
      same = 1;
    }

    if (stringArr[i] === stringArr[i + 1]) {
      if (prevSame === 0) {
        same = same + 1;
      }

      if (prevSame !== 0) {
        if (prevSame === same) {
          if (stringArr[i] !== stringArr[i + 1]) {
            same = 1;
          }

          if (stringArr[i] === stringArr[i + 1]) {
            answer = false;
            return answer;
            break;
          }
        }
      }
    }
  }

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.6MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	실패 (0.15ms, 33.6MB)
// 테스트 9 〉	실패 (0.11ms, 33.5MB)
// 테스트 10 〉	실패 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.10ms, 33.6MB)
// 테스트 12 〉	실패 (0.10ms, 33.5MB)
// 테스트 13 〉	실패 (0.12ms, 33.4MB)
// 테스트 14 〉	실패 (0.11ms, 33.5MB)
// 테스트 15 〉	실패 (0.11ms, 33.4MB)
// 테스트 16 〉	실패 (0.11ms, 33.4MB)
// 테스트 17 〉	통과 (0.08ms, 33.3MB)
// 테스트 18 〉	통과 (0.11ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 채점 결과
// 정확성: 38.6
// 효율성: 0.0
// 합계: 38.6 / 100.0
