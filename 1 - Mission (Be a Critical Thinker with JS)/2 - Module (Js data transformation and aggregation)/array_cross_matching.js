
const range = (start, stop, step) => {
    return Array.from({ length: Math.ceil((stop - start) / step) },
        (_, i) => start + i * step
    )
}

console.log(range(1, 11, 1));