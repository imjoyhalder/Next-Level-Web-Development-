class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)

let temp = head
while (temp != null) {
    console.log(temp.value, "-->\b");
    temp = temp.next
}