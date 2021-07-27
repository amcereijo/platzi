class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class MyBinayTree {
	constructor() {
		this.root = null;
	}


	insert(value) {
		const newNode = new Node(value);

		if(!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;

			while(true) {
				if(value < current.value) {
					if(!current.left) {
						current.left = newNode;
						break;
					}
					current = current.left;
				} else {
					if(!current.right) {
						current.right = newNode;
						break;
					}
					current = current.right;
				}
			}
		}

		return this;
	}

	findNode(value) {
		let current = this.root;

		while(true) {
			if (!current || current.value === value) {
				break;
			}

			current = (value < current.value)
				? current = current.left
				: current = current.right;
		}

		return current;
	}
}

const tree = new MyBinayTree();
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(4);

console.log(JSON.stringify(tree, null, 2));

console.log('findNode 1', JSON.stringify(tree.findNode(1), null, 2));
console.log('findNode 3', JSON.stringify(tree.findNode(3), null, 2));