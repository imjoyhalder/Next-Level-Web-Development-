
const arrOfNumber: number[] = [1, 3, 4, 5, 6, 7];

const arrOfStringUsingMap = arrOfNumber.map((num) => num.toString())
console.log(arrOfStringUsingMap);


type AreaOfNum = {
    height: number;
    width: number;
}

type AreaOfString = {
    height: string;
    width: string;
}

type areaOfString = {
    [key in keyof AreaOfString]: number;
}

type Area<T> = {
    [key in keyof T]: T[key];
}

const area1: Area<{ height: number; width: string }> = {
    height: 34,
    width: "23"
}