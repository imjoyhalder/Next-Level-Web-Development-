
const kgToGMCConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000
    }
    else if (typeof input === 'string') {
        // console.log(input.split(" "));
        const [value, value2] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGMCConverter(20) as number
console.log({ result1 });


const result2 = kgToGMCConverter('12 kg') as string
console.log({ result2 });

let anything: any;
anything = "Joy Halder";

(anything as string)
// console.log(anything);

type CustomType = {
    message: string
}

try {

} catch (error) {
    console.log((error as CustomType).message);
}