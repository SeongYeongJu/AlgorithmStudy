// 프로그래머스 '스택/큐 - 올바른 괄호' 문제

// 나의 풀이)

function solution(s) {
  var answer = true;
  let strArr = [...s];
  let count = 0;

  // 여는 괄호는 count 1 증가, 닫는 괄호는 count 1 감소
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(") {
      count += 1;
    } else {
      count -= 1;
      // 닫는 괄호에서 count가 0보다 작아지는지 검사하고 작아지면 false 반환
      if (count < 0) {
        answer = false;
        break;
      }
    }

    // count가 0이고 (올바르게 괄호가 닫히고) 인덱스 i가 마지막 인덱스보다 작을 때,
    // 다음 인덱스의 괄호는 무조건 여는 괄호가 나와야한다.
    // 그렇지 않으면 false를 반환
    if (count === 0 && i < strArr.length - 1) {
      if (strArr[i + 1] !== "(") {
        answer = false;
        break;
      }
    }

    // 올바르게 괄호가 닫혔다면 마지막 인덱스에서 count는 0이 되어야한다.
    // 그렇지 않으면 false를 반환
    if (i === strArr.length - 1) {
      if (count !== 0) {
        answer = false;
      }
    }
  }

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.6MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 32.1MB)
// 테스트 7 〉	통과 (0.05ms, 32.1MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.14ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.13ms, 33.4MB)
// 테스트 13 〉	통과 (0.13ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.4MB)
// 테스트 15 〉	통과 (0.13ms, 33.4MB)
// 테스트 16 〉	통과 (0.13ms, 33.4MB)
// 테스트 17 〉	통과 (0.15ms, 33.4MB)
// 테스트 18 〉	통과 (0.13ms, 33.5MB)

// 효율성  테스트
// 테스트 1 〉	통과 (3.69ms, 37.7MB)
// 테스트 2 〉	통과 (3.60ms, 37.7MB)

// 채점 결과
// 정확성: 69.5
// 효율성: 30.5
// 합계: 100.0 / 100.0
