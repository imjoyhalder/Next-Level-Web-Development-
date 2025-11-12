// Nullable 
const getUser = (input: string | null)=>{
    if(input){
        console.log('From DB: ', input);
    }
    else{
        console.log("All user from db");
    }
}

// getUser(null)

// unknown 
const discountCalculator = (input: unknown)=>{
    if(typeof input === 'number'){
        console.log(input*0.1);
    }
    if(typeof input === 'string'){
        const [splitNumber] = input.split(' ')
        console.log(Number(splitNumber)*0.1);
    }
    else{
        console.log("Wrong input");
    }
}
discountCalculator('100 tk')

const throwError = (msg: string): never=>{
    throw new Error(msg)
}
throwError('Error..')