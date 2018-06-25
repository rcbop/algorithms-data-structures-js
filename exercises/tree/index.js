// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        // for (const child of this.children) {
        //     if (child.data === data) {
        //         this.children.splice(this.children.indexOf(child), 1);
        //     }
        // }
        this.children = this.children.filter((elm) => {
            return elm.data !== data;
        });
    }
}

class Tree {
    constructor(root = null){
        this.root = root;
    }

    traverseBF(func){
        let nodes = [this.root];
        while (nodes.length > 0) {
            let current = nodes.shift();
            nodes.push(...current.children);
            func(current);
        }
    }

    traverseDF(func){
        let nodes = [this.root];
        while (nodes.length > 0) {
            let current = nodes.shift();
            nodes.unshift(...current.children);
            func(current);
        }
    }
}

module.exports = { Tree, Node };
