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
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    insert(index, value) {

        if (index < 0 || index > this.length) {
            console.log('Index out of bound');
            return
        }

        if (index == 0) {
            this.prepend(value)
            this.length++
            return
        }
        if (index == this.length) {
            this.append(value)
            this.length++
            return
        }

        let temp = this._traverseOfIndex(index)

        const newNode = new Node(value)
        let oldNode = temp.next
        newNode.next = oldNode
        temp.next = newNode

        this.length++
    }

    _traverseOfIndex(index) {
        let temp = this.head
        let count = 0

        while (count != index - 1) {
            temp = temp.next
            count++
        }
        return temp
    }

    print() {
        let temp = this.head
        const arr = []
        while (temp != null) {
            // process.stdout.write(temp.value + " --> ");
            arr.push(temp.value)
            temp = temp.next
        }
        console.log(arr.join(' --> ', ' -->null'));
    }

    isEmpty() {
        return this.length === 0
    }

    getLength() {
        return this.length
    }

    peekHead() {
        if (this.head) {
            console.log('Empty')
        }
        console.log(this.head.value);
    }
}

const lnkList = new LinkedList()
lnkList.append(10)
lnkList.append(20)
lnkList.append(30)
lnkList.append(40)
lnkList.insert(3, 1000)


lnkList.print()

