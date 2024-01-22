class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity).fill(null);
        this.capacity = capacity;
        this.rear = -1;
        this.front = -1;
        this.currentLength = 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const removedItems = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return removedItems;
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    size() {
        return this.currentLength;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        }
        else {
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }
            str += this.items[i];
            console.log(str)
        }
    }

}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
console.log("front " + queue.front);
queue.enqueue(5);
console.log("front " + queue.front);

queue.enqueue(10);
console.log("front " + queue.front);
queue.enqueue(15);
console.log("front " + queue.front);
queue.enqueue(20);
console.log("front " + queue.front);
queue.enqueue(25);
console.log(queue.size());
queue.display();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log("front " + queue.front);

console.log(queue.peek());
queue.display();
queue.enqueue(30);
queue.display();