class Node {
	constructor(value, previous = null, next = null) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

class MyDoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}

	append(value) {
		if(!this.head) {
			this.head = new Node(value);
			this.tail = this.head;
		} else {
			const newNode = new Node(value, this.tail);

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
			const newNode = new Node(value, null, this.head);
			this.head.previous = newNode;
			this.head = newNode;
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
		element.next = new Node(value, element, element.next)
		element.next.next.previous = element.next;

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
			actual.next.previous = previous;
		}
	}

	removeAt(index) {
		if(index > this.length) {
			// maybe throw error
			return;
		}

		const element = this.findElementAt(index-1);
		element.next = element.next.next;
		element.next.next.previous = element.next;
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

	printAllBack() {
		let actual = this.tail;

		console.log('------')
		while(actual) {
			console.log(actual.value);
			actual = actual.previous;
		}
		console.log('------')
	}
}


const linkedList = new MyDoubleLinkedList();
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
linkedList.printAllBack();


linkedList.removeAt(2);
linkedList.printAll();

linkedList.remove('a');
linkedList.printAll();
linkedList.printAllBack();
