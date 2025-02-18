interface Queue<T> {
	enqueue(item: T): void;
	dequeue(): T | undefined;
	peek(): T | undefined | null;
	isEmpty(): boolean;
	length(): number;
}

class ArrayQueue<T> implements Queue<T> {
	private queue: T[] = [];

	enqueue(item: T) {
		this.queue.push(item);
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("At this moment our queue is empty");
		}

		return this.queue.shift();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.queue[0];
	}
	
	isEmpty() {
		return this.queue.length === 0;
	}

	length() {
		return this.queue.length;
	}
}

class Stack<T> {
	private stack: T[] = [];
	private limit: number;

	constructor(limit: number = Number.MAX_VALUE) {
		this.limit = limit;
	}

	push(value: T) {
		if (this.stack.length === this.limit) {
			throw new Error("At this moment our stack is full");
		}

		this.stack.push(value);
	}

	pop() {
		if (this.length() === 0) {
			throw new Error("At this moment our stack is empty");
		}

		return this.stack.pop();
	}

	length() {
		return this.stack.length;
	}

	isEmpty() {
		return this.length() === 0;
	}

	top() {
		if (this.length() === 0) {
			return null;
		}

		return this.stack[this.length() - 1];
	}
}

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());