
class stack{
    constructor(){
        this.item = []
    }

    push(value){
        this.item.push(value)
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        else{
            this.item.pop()
        }
    }

    isEmpty(){
        return this.item.length === 0
    }

    print(){
        console.log(this.item);
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item[this.item.length-1]
    }
}

const stc = new stack()
stc.push(10)
stc.push(20)
stc.push(30)
stc.pop()




