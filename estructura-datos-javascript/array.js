class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(value) {
		this.data[this.length] = value;
		this.length += 1;
		return this.data;
	}

	pop() {
		const value = this.data[this.length-1];

		this.data[this.length-1] = undefined;
		//delete this.data[this.length-1];
		this.length -= 1;

		return value;
	}

	delete(index) {
		const item = this.data[index];

		this.shiftIndex(index)

		return item;
	}

	shiftIndex(index) {
		for(let i = index; i < this.length - 1; i +=1) {
			this.data[i] = this.data[i + 1];
		}
		this.data[this.length - 1] = undefined;
		// delete this.data[this.length - 1]
		this.length -= 1;
	}
}



// test

const myArray = new MyArray();
myArray.push('name1');
myArray.push('name2');
myArray.push('name3');
myArray.push('name4');

console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.delete(1));
console.log(myArray);
