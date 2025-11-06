
class counter {
    constructor(count) {
        this.count = count
    }
    add(amount) {
        this.count += amount
    }
    print() {
        console.log(this.count);
    }
}

const cnt = new counter(0)
cnt.add(2)
cnt.add(5)
cnt.print()