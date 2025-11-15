class Counter {
    static count: number = 1

    increment(){
        return Counter.count ++
    }
    decrement(){
        return Counter.count--
    }
}

const instance1 = new Counter()
console.log(instance1.increment())
console.log(instance1.increment())
console.log(instance1.increment())

const instance2  = new Counter()
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());