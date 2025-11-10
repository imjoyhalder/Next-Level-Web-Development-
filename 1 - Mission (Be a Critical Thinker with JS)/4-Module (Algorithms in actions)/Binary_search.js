
const binarySearchZ = (arr, target) => {
    let l = 0, r = arr.length

    for (let i = 0; i < arr.length; i++) {
        let mid = (l + r) / 2
        if (target === arr[i]) {
            return i
        }
        else if (target > arr[mid]) {
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }
    return -1; 
}
console.log(binarySearchZ([3,5,6,7,9,11],11));