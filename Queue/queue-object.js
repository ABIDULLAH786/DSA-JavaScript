class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        let removedItem = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return removedItem;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    display() {
        console.log(this.items)
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue.size());
queue.display();
console.log(queue.dequeue());
console.log(queue.peek());
queue.display();