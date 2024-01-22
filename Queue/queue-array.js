class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return !this.isEmpty() ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.toString())
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
queue.display();
console.log(queue.dequeue());
console.log(queue.peek());
queue.display();