const selectionSort = (array) => {
    if (array.length === 0) return array
    if (array.length === 1) return array
    if (array.length === 2) {
        if (array[0] > array[1]) swap(array, 0, 1)
        return array
    }

    let currentIndex = 0

    while (currentIndex < array.length - 1) {
        let smallest = array[currentIndex]
        let smallestIndex = currentIndex
        console.log(`current index is ${currentIndex}`);
        for (let i = currentIndex + 1; i < array.length; i++) {
            console.log(`current smallest is ${smallest}; looking at ${array[i]}`)
            if (smallest > array[i]) {
                smallest = array[i]
                smallestIndex = i
                console.log(`new smallest is ${smallest}`);
            }
        }

        console.log(`smallest unsorted is ${smallest} at index ${smallestIndex}`)

        if (array[currentIndex] !== smallest) {
            console.log("swapping")
            swap(array, currentIndex, smallestIndex)
        } else {
            console.log("not swapping")
        }

        currentIndex++
    }

    return array
}

const swap = (array, currentIndex, smallestIndex) => {
    const smallest = array[smallestIndex]
    array[smallestIndex] = array[currentIndex]
    array[currentIndex] = smallest
}
