class Node {
    constructor(nodeValue) {
        this.value = nodeValue;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = -1;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }


    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index == 0) {
            this.prepend(value);
        }
        else {
            const node = new Node(value);

            let prev = this.head;
            for (let i = 0; i < index-1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        
    }

    display() {
        if (!this.isEmpty()) {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value}->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(10);
list.append(20);
list.append(30);
list.insertAt(0, 3);
list.display();
