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
    
    depthFirstTraversal(start, end, visited) {
        
        if (!visited) {
            visited = new Set();
        }
        //keep traversing deeply
        //until you hit a leaf node
        //or you are at the node you've been looking for
        if (start.value === end.value) {
            console.log("Found it")
            return
        }
        console.log('Visiting Node', start.value)
        visited.add(start)
        for (const adjacency of start.edgesList) {
            if(!visited.has(adjacency)) {
                this.depthFirstTraversal(adjacency, end, visited)
            }
        }
        //HERE
        //the implicit return of undefined is one of our base cases

    }
}


const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');
const HKG = new Node('HKG');
 
const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]);

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);

graph.depthFirstTraversal(DFW, HKG)