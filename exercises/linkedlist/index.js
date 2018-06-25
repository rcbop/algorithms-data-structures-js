// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let current = this.head;
        let previous = null;
        while (current && current.next) {
            previous = current;
            current = current.next;
        }
        if (previous) {
            previous.next = null;
        } else {
            this.head = null;
        }
    }

    insertLast(data) {
        let last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let rtn = null;
        if (index < this.size()) {
            let current = this.head;
            let counter = 0;
            while (current && current.next && counter !== index) {
                counter++;
                current = current.next;
            }
            rtn = current;
        }
        return rtn;
    }

    // removeAt(index) {
    //     if (index < this.size()) {
    //         let current = this.head;
    //         let previous = null;
    //         let counter = 0;
    //         while (current && current.next && counter !== index) {
    //             counter++;
    //             previous = current;
    //             current = current.next;
    //         }
    //         if (previous && current){
    //             previous.next = current.next;
    //         } else {
    //             this.head = current.next;
    //         }   
    //     }
    // }

    removeAt(index) {
        if (this.size() === 0) {
            return;
        } else if (index === 0) {
            this.head = this.head.next;
        } else if (index < this.size()) {
            let previous = this.getAt(index - 1);
            previous.next = previous.next.next;
        }
    }

    // insertAt(data, index) {
    //     if (this.size() === 0){
    //         this.head = new Node(data);
    //     } else if (index <= this.size()) {
    //         if (index == 0) {
    //             let next = this.head;
    //             this.head = new Node(data, next);
    //         } else {
    //             let prev = this.getAt(index - 1);
    //             let node = this.getAt(index);
    //             let newNode = new Node(data);
    //             prev.next = newNode;
    //             newNode.next = node;
    //         }
    //     } else {
    //         this.getLast().next = new Node(data);
    //     }
    // }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }

    forEach(fn) {
        let current = this.head;
        let counter = 0;
        while (current) {
            fn(current, counter);
            current = current.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current;
            current = current.next;
        }
    }
}

module.exports = {
    Node,
    LinkedList
};