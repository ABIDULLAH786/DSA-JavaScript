class Stack {
    constructor() {
        this.items = {};
        this.head = 0;
    }

    push(element) {
        this.items[this.head] = element;
        this.head++;
    }

    pop() {
        const removedItem = this.items[this.head - 1];
        delete this.items[this.head - 1];
        this.head--;
        return removedItem;
    }

    peek() {
        return this.items[this.head - 1]
    }

    isEmpty() {
        return this.head === 0;
    }

    size() {
        return this.head
    }

    display() {
        console.log(this.items)
    }
}



const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.display();
console.log(stack.pop());
console.log(stack.peek());
stack.display();
