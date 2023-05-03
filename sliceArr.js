// 프로그래머스 '배열 조각하기' 문제

// 나의 풀이)

function solution(arr, query) {
  var answer = [];

  for (let i = 0; i < query.length; i++) {
    let idx = query[i];

    if (i % 2 === 0) {
      arr = arr.slice(0, idx + 1);
    }

    if (i % 2 !== 0) {
      arr = arr.slice(-(arr.length - idx));
    }
  }

  answer = [...arr];

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.30ms, 39.9MB)
// 테스트 2 〉	통과 (2.14ms, 36.7MB)
// 테스트 3 〉	통과 (0.37ms, 34.7MB)
// 테스트 4 〉	통과 (0.31ms, 34MB)
// 테스트 5 〉	통과 (0.36ms, 35.7MB)
// 테스트 6 〉	통과 (0.64ms, 36.2MB)
// 테스트 7 〉	통과 (0.93ms, 36.3MB)
// 테스트 8 〉	통과 (0.31ms, 34.8MB)
// 테스트 9 〉	통과 (0.57ms, 36.1MB)
// 테스트 10 〉	통과 (0.25ms, 33.9MB)
// 테스트 11 〉	통과 (0.24ms, 33.9MB)

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
