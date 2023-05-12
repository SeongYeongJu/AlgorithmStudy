// 백준 'card2' 문제

// 나의 풀이)

// -----문제 입력 세팅------ //
const fs = require("fs");

let input = fs.readFileSync("./input-card2.txt").toString();
let inputNum = +input;
// ------------------------- //

// 클래스로 큐를 구현해서 문제를 풀어보자.
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    // 큐의 크기를 구하는 메소드를 정의한다.
    size() {
        // rear가 가리키는 곳이 undefined라면 큐에는 아무런 데이터가 없다는 뜻이다. 크기는 0.
        if (this.storage[this.rear] === undefined) {
            return 0;
        } else {
            // 그 외의 경우에는 아래와 같이 큐의 크기를 구할 수 있다.
            return this.rear - this.front + 1;
        }
    }

    // 큐에 값을 추가하는 작업을 정의한다.
    enQueue(value) {
        // 큐가 비어있는 경우
        if (this.size() === 0) {
            // 0번 위치에 추가할 값을 넣고 포인터는 이동시키지 않는다.
            this.storage["0"] = value;
            // 큐가 비어있지 않으면 아래와 같이 수행한다.
        } else {
            //rear의 위치를 한 칸 조정해준다.
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }

    // 큐에 값을 꺼내는 작업을 정의한다.
    deQueue() {
        // temp에 큐에서 꺼낼 값을 저장한다.
        let temp;

        // 두 포인터가 같으면 '초기화 상태'거나, '꺼내야 할 값이 마지막 하나 남았다는 뜻'이다.
        // 하지만 이 부분에서 front와 rear를 0으로 초기화 시켜버리면 '초기화 상태'인 경우를 해당 조건문에서 고민할 필요없다.
        // 무조건 꺼낼 값이 단 하나만 남은 상태이다.
        if (this.rear === this.front) {
            // temp에 현재 front가 가리키는 값을 저장하고, 해당 위치를 삭제하자.
            temp = this.storage[this.front];
            delete this.storage[this.front];

            // 초기화 시켜버리자.
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];

            this.front += 1;
        }

        return temp;
    }
}

function solution(num) {
    let answer;
    let queue = new Queue();
    let count = 0;
    let temp = 0;

    for (let i = 0; i < num; i++) {
        queue.enQueue(i + 1);
    }

    while (queue.size() > 1) {
        if (count % 2 === 0) {
            queue.deQueue();
            count += 1;
        }

        if (count % 2 !== 0) {
            temp = queue.deQueue();
            queue.enQueue(temp);
            count += 1;
        }
    }

    answer = queue.deQueue();
    console.log(answer);

    return answer;
}

solution(inputNum);

// 결과 - 정답
// 메모리 - 57932KB
// 시간 - 420ms
// 코드 길이 - 1533B
