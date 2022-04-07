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

    breadthFirstTraversal(start, end) {
        const queue = [start];

        while(queue.length > 0) {
            const node = queue.shift();
            const visitedNodes = {};
            visitedNodes[start.value] = null;

            //add it's neighbors to the queue
            //track where nodes we're adding are coming from
            for (const adjacency of node.edgesList) {
                if (!visitedNodes.hasOwnProperty(adjacency.value)){
                    visitedNodes[adjacency.value] = node;
                    queue.push(adjacency);
                    console.log(adjacency.value)
            }
        }

    }
}}