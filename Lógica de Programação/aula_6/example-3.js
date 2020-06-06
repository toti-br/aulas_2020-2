function insertionSort (collection) {
  const len = collection.length

  for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
    let sortedIndex = unsortedIndex
    const element = collection[unsortedIndex]

    while (sortedIndex > 0 && collection[sortedIndex - 1] > element) {
      collection[sortedIndex] = collection[sortedIndex - 1]
      sortedIndex--
    }

    collection[sortedIndex] = element
  }

  return collection
}
