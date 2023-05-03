// 프로그래머스 '스택/큐 - 올바른 괄호' 문제

// 나의 풀이2) - 실패 코드

function solution(s) {
  var answer = true;
  let stringArr = [...s];
  let startStrArr = [];
  let endStrArr = [];

  // 배열이 짝수가 아니면 틀린 것이므로 바로 return
  if (stringArr.length % 2 !== 0) {
    answer = false;
    return answer;
  }

  // 배열의 처음 인덱스와 마지막 인덱스는 정해진 문자열이 있으므로 그것에 일치하지 않으면 바로 return
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

  // 시작 기호 '('와 마지막 기호 ')'의 갯수가 일치하지 않으면 틀린 것이므로 바로 retrun
  if (startStrArr.length !== endStrArr.length) {
    answer = false;
    return answer;
  }

  // 이 부분은 생각을 잘못한 것 같다.
  // startStrArr와 endStrArr의 길이가 같아야 반복문까지 실행이 되는데,
  // 그렇다는 것은 당연히 두 배열의 요소들은 1밖에 없으므로 모두 일치한다.
  for (let i = 0; i < startStrArr.length; i++) {
    if (startStrArr[i] === endStrArr[i]) continue;
    if (startStrArr[i] !== endStrArr[i]) {
      answer = false;
      break;
    }
  }

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.7MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
//! 테스트 5 〉	실패 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.08ms, 33.6MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.08ms, 33.5MB)
//! 테스트 11 〉	실패 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.18ms, 33.4MB)
// 테스트 13 〉	통과 (0.18ms, 33.5MB)
// 테스트 14 〉	통과 (0.17ms, 33.5MB)
// 테스트 15 〉	통과 (0.17ms, 33.6MB)
// 테스트 16 〉	통과 (0.17ms, 33.4MB)
// 테스트 17 〉	통과 (0.09ms, 33.6MB)
// 테스트 18 〉	통과 (0.09ms, 33.7MB)

// 효율성  테스트
// 테스트 1 〉	통과 (10.54ms, 39.1MB)
// 테스트 2 〉	통과 (8.57ms, 39MB)

// 채점 결과
// 정확성: 61.8
// 효율성: 30.5
// 합계: 92.3 / 100.0
