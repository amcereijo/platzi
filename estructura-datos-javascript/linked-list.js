class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class MyLinkedList {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}

	append(value) {
		const newNode = new Node(value);

		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length +=1;
	}

	prepend(value) {
		if (!this.head) {
			this.head = new Node(value);
			this.tail = this.head;
		} else {
			this.head = new Node(value, this.head);
		}

		this.length +=1 ;
	}

	findElementAt(index) {
		let cont = 0;
		let actual = this.head;

		while(cont !== index) {
			actual = actual.next;
			cont +=1;
		}

		return actual;
	}

	insert(value, index) {
		if(index > this.length) {
			// maybe throw error or add to the end
			return;
		}

		const element = this.findElementAt(index-1);
		element.next = new Node(value, element.next)
		this.length += 1;
	}

	remove(value) {
		let actual = this.head;
		let previous = this.head;

		while(actual.value !== value) {
			previous = actual;
			actual = actual.next;
		}

		if (actual) {
			previous.next = actual.next;
		}
	}

	removeAt(index) {
		if(index > this.length) {
			// maybe throw error
			return;
		}

		const element = this.findElementAt(index-1);
		element.next = element.next.next;
		this.length += 1;
	}

	printAll() {
		let actual = this.head;

		console.log('------')
		while(actual) {
			console.log(actual.value);
			actual = actual.next;
		}
		console.log('------')
	}
}


const linkedList = new MyLinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.prepend('1');
linkedList.append('c');
linkedList.append('d');
linkedList.prepend('0');
linkedList.append('e');
linkedList.insert('01', 2);


console.log(linkedList)
linkedList.printAll();


linkedList.removeAt(2);
linkedList.printAll();

linkedList.remove('a');
linkedList.printAll();
