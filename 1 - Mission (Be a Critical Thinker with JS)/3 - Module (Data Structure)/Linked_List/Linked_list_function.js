class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value)
        if(this.head===null){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head =  newNode
        }
        this.length++
    }

    print() {
        let temp = this.head
        const arr = []
        while (temp != null) {
            // process.stdout.write(temp.value + " --> ");
            arr.push(temp.value)
            temp = temp.next
        }
        console.log(arr.join(' --> ',' -->null'));
    }

    isEmpty() {
        return this.length === 0
    }

    getLength() {
        return this.length
    }

    peekHead() {
        if(this.head){
            console.log('Empty')
        }
        console.log(this.head.value);
    }
}

const lnkList = new LinkedList()
lnkList.append(10)
lnkList.append(20)
lnkList.prepend(100)
lnkList.prepend(200)
console.log(lnkList.getLength);
lnkList.print()

