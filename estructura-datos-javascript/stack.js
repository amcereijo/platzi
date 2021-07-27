class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next
	}
}


class MyStack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(value) {
		if(!this.bottom) {
			this.top = new Node(value);
			this.bottom = this.top;
		} else {
			this.top = new Node(value, this.top)
		}

		this.length += 1;

		return this;
	}

	pop() {
		if(!this.top) {
			return null;
		}

		const returnValue = this.top.value

		this.top = this.top.next;

		this.length -= 1;

		return returnValue;
	}

	peek() {
		return this.top ? this.top.value : null;
	}
}

const stack = new MyStack();

stack.push('value1')
console.log('Actual top:', stack.top.value);

stack.push('value2')
console.log('Actual top:', stack.top.value);

stack.push('value3')
console.log('Actual top:', stack.top.value);

console.log('Peek:', stack.peek())

console.log('Pop:', stack.pop())
console.log('Actual top:', stack.top.value);
console.log('Pop:', stack.pop())
console.log('Actual top:', stack.top.value);