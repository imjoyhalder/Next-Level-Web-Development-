
type generic = Array<number|string>

const getUniqueValues = (arr1: generic, arr2: generic): generic => {

    const mergedArray: generic = []
    for (let i of arr1) {
        mergedArray[mergedArray.length] = i
    }
    for (let i of arr2) {
        mergedArray[mergedArray.length] = i
    }

    const uniqueArray: number[] = []

    for (let i = 0; i < mergedArray.length; i++) {
        let found: boolean = false;

        for (let k = 0; k < uniqueArray.length; k++) {
            if (mergedArray[i] === uniqueArray[k]) {
                found = true
                break;
            }
        }
        if (!found) {
            uniqueArray[uniqueArray.length] = mergedArray[i]
        }
    }

    return uniqueArray;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const ar1 = ['e','a','c','d','e','a']
const ar2 = ['f','a','d','c','e','a']
console.log(getUniqueValues(ar1, ar2));
console.log(getUniqueValues(array1, array2));