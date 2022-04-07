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
}