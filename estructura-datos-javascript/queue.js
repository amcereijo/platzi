class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next
	}
}


class MyQueue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if(!this.last) {
			this.last = newNode;
			this.first = newNode;
		} else {
			this.last.next = newNode;
			this.last = this.last.next;
		}

		this.length += 1;
	}

	dequeue() {
		if(!this.first) {
			return null;
		}

		const value = this.first.value;
		this.first = this.first.next;

		this.length -= 1;

		return value;
	}

	peek() {
		return this.first ? this.first.value : null;
	}
}

const queue = new MyQueue();
queue.enqueue('value1');
console.log('fist:', queue.first.value, 'last:', queue.last.value);
queue.enqueue('value2');
console.log('fist:', queue.first.value, 'last:', queue.last.value);
queue.enqueue('value3');
console.log('fist:', queue.first.value, 'last:', queue.last.value);
queue.enqueue('value4');
console.log('fist:', queue.first.value, 'last:', queue.last.value);

console.log('peek:', queue.peek());

console.log('dequeue:', queue.dequeue());
console.log('fist:', queue.first.value, 'last:', queue.last.value);

console.log('dequeue:', queue.dequeue());
console.log('fist:', queue.first.value, 'last:', queue.last.value);