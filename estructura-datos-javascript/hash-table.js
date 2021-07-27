class MyHashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;
		for(let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(1) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this.hashMethod(key);

		if (!this.data[address]) {
			this.data[address] = [];
		}

		this.data[address].push([key, value]);
	}

	get(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];

		if (currentBucket) {
			if(currentBucket.length === 1) {
				return currentBucket[0][1];
			}

			for(let i = 0; i < currentBucket.length; i += 1) {
				if(currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}

		}

		return null;
	}

	keys() {
		const keys = [];

		for(let i = 0; i < this.data.length; i +=1) {
			if(this.data[i]) {
				for(let j = 0; j < this.data[i].length; j +=1) {
					keys.push(this.data[i][j][0]);
				}
			}
		}

		return keys;
	}
}

const myHashTable = new MyHashTable(50);
myHashTable.set('angel', 'angelValue');
myHashTable.set('pepel2', 'angel2Value');
myHashTable.set('wanted', 'angel3Value');

console.log(myHashTable);

console.log(myHashTable.get('pepel2'));
console.log(myHashTable.get('angel21'));

console.log(myHashTable.keys());
