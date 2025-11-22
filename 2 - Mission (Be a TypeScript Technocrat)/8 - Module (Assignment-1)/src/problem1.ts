
type T = string|number|boolean

const formatValue = (value: T): T=>{
    if(typeof value ===  'number'){
        return value*10
    }
    else if(typeof value==='string'){
        return value.toUpperCase()
    }
    else{
        return !value
    }
}

// console.log(formatValue(10));

