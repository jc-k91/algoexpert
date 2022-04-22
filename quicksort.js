function quickSort(array) {
    if (array.length === 0) return array
    if (array.length === 1) return array
    if (array.length === 2) {
        if (array[0] > array[1]) {
            array = array.reverse()
        }
        return array
    }

    const pivotIndex = Math.floor(Math.random() * array.length)

    const lte = []
    const pivot = array[pivotIndex]
    const gt = []

    console.log(`Pivoting at ${pivot} (index ${pivotIndex})`)

    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            if (array[i] <= pivot) {
                lte.push(array[i])
            }
            if (array[i] > pivot) {
                gt.push(array[i])
            }
        }
    }

    console.log(lte.length + gt.length + 1);
    array = [...quickSort(lte), pivot, ...quickSort(gt)]
    return array
}
