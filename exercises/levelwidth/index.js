// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let nodes = [root, 's'];
    let width = [0];
    while(nodes.length > 1){
        let current = nodes.shift();
        if (current == 's'){
            width.push(0);
            nodes.push('s');
        } else{
            nodes.push(...current.children);
            width[width.length-1]++;
        }
    }
    return width;
}

module.exports = levelWidth;
