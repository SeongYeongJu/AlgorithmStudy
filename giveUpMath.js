// 프로그래머스 '수포자' 문제

// 나의 풀이)
function solution(answers) {
  var answer = [];
  let maxValue = 0; // 맞춘 개수 중 최댓값
  let scoreArr = [[], [], []]; // 수포자들이 맞춘 갯수를 담는 배열
  let scores = []; // scoreArr.length로 맞춘 갯수를 담는 배열

  // 수포자들이 찍는 방식
  let checkAnswerArr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // answers 배열을 돌면서 수포자들의 답안과 비교 후 맞추면 scoreArr의 각 인덱스에 1을 넣어준다.
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === checkAnswerArr[0][i % 5]) {
      scoreArr[0].push(1);
    }

    if (answers[i] === checkAnswerArr[1][i % 8]) {
      scoreArr[1].push(1);
    }

    if (answers[i] === checkAnswerArr[2][i % 10]) {
      scoreArr[2].push(1);
    }
  }

  // scoreArr 각 인덱스의 길이만큼 맞춘 갯수이므로 length 속성을 이용한다.
  scores = [scoreArr[0].length, scoreArr[1].length, scoreArr[2].length];

  // scores 배열의 최댓값을 maxValue에 넣어준다.
  maxValue = Math.max(...scores);

  // scores의 각 요소를 돌면서 maxValue와 일치하는 인덱스(정확히는 인덱스 + 1)를 answer에 넣어준다.
  scores.forEach((element, idx) => {
    if (element === maxValue) {
      answer = [...answer, idx + 1];
    }
  });

  return answer;
}

// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.28ms, 33.5MB)
// 테스트 6 〉	통과 (0.35ms, 33.4MB)
// 테스트 7 〉	통과 (0.89ms, 33.6MB)
// 테스트 8 〉	통과 (0.44ms, 33.5MB)
// 테스트 9 〉	통과 (29.56ms, 37.1MB)
// 테스트 10 〉	통과 (1.40ms, 33.5MB)
// 테스트 11 〉	통과 (4.82ms, 37.2MB)
// 테스트 12 〉	통과 (28.86ms, 37MB)
// 테스트 13 〉	통과 (0.46ms, 33.6MB)
// 테스트 14 〉	통과 (4.45ms, 37.2MB)

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
