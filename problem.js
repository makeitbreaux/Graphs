class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = []
    }

    connect (node) {
        this.edgesList.push(node);
        node.edgesList.push(this)
    }

    getAdjacentNodes() {
        return this.edgesList
    }

    isConnected(node) {
        return !!this.edgesList.find(edge => edge.value ===node.value)
    }
}

class Graph {
    constructor (nodes) {
        this.nodes = [...nodes]
    }

    addToGraph(node) {
        this.nodes.push(node)
    }

    reconstructPath (visitedNodes, startNode, endNode) {
        let currNode = endNode;

        const shortestPath = [];
        while (currNode !== null) {
            shortestPath.push(currNode);
            currNode = visitedNodes[currNode.value];
        }

        console.log(shortestPath)
    }

    breadthFirstTraversal(start, end) {
        const queue = [start];
        const visitedNodes = {};
        visitedNodes[start.value] = null;

        while(queue.length > 0) {
            const node = queue.shift();

            if (node.value === end.value) {
                console.log('Found it');
                return this.reconstructPath(visitedNodes, start, end);
            }
           
            //add it's neighbors to the queue
            //track where nodes we're adding are coming from
            for (const adjacency of node.edgesList) {
                if (!visitedNodes.hasOwnProperty(adjacency.value)){
                    visitedNodes[adjacency.value] = node;
                    queue.push(adjacency);
                    console.log(adjacency.value)
            }
        }
    } console.log(visitedNodes)
}}

const Hannah = new Node('Hannah');
const Mary = new Node('Mary');
const Mel = new Node('Mel');
const Max = new Node('Max');
const Dan = new Node('Dan');
const Nis = new Node('Nis');
const Chris = new Node('Chris');
const Nicolette = new Node('Nicolette');
const Yair = new Node('Yair');
const Mabel = new Node('Mabel');
const Liz = new Node('Liz');

const graph = new Graph([Hannah, Mary, Mel, Max, Dan, Nis, Chris, Nicolette, Yair, Mabel, Liz]);

graph.breadthFirstTraversal(graph);