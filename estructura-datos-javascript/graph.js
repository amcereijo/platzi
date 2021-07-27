/*

    2 - 0
  /  \
 1 - 3
*/

// ----------- Representation ------------
// Edge list
const graphEdge = [
 [0,2],
 [2,3],
 [2.1],
 [1,3]
];

// Adjacent list
const graphAdjArray = [
 [2], // 0 connects with
 [2,3], // 1 connects with
 [0,1,3], // 2 connects with
 [1,2] // 3 connects with
];
const graphAdjObject = {
	0: [2],
	1: [2, 3],
	2: [0,1,3],
	3: [1,2]
};

// Adjacent matrix  (1 - connect, 0 - no connect)
const graphMatrixArray = [
 [0,0,1,0],
 [0,0,1,1],
 [1,1,0,1],
 [0,1,1,0]
];
const graphMatrixObject = {
	0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
};
// ----------- ................. ------------

class MyGrahp {
	constructor() {
		this.nodes = 0;
		this.adjacentList = {};
	}

	/**
	 * Add node
	 */
	addVertex(node) {
		this.adjacentList[node] = [];
		this.nodes += 1;
	}

	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}
}

const graph = new MyGrahp();
console.log(graph);
graph.addVertex(1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(8);
console.log(graph);


graph.addEdge(3, 5);
graph.addEdge(6, 3);
graph.addEdge(1, 6);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 8);

console.log(graph);
