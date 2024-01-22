class HashTable {
    constructor(size = 0) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(3);
table.set("mean", "ak");


table.set("name", "abid");
table.display();

// console.log(table.size)
// console.log(table.table)