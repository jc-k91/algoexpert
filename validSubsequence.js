function isValidSubsequence(array, sequence) {
    if (array.length < sequence.length) return false

    let start = sequence[0]
    let startPositions = []

    for (let i = 0; i < array.length - sequence.length + 1; i++) {
        if (array[i] === start) {
            startPositions.push(i)
        }
    }

    if (startPositions.length === 0) return false

    for (const position of startPositions) {
        if (equalityChecker(array, position, sequence)) {
            return true
        }
    }

    return false
}

const equalityChecker = (array, position, sequence) => {
    for (let i = position; i < array.length; i++) {
        if (array[i] === sequence[0]) {
            sequence.shift()
        }
    }

    return sequence.length === 0 ? true : false
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]))
