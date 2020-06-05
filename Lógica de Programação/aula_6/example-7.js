function binarySearch (collection, element) {
  let start = 0
  let end = collection.length - 1

  while (start <= end) {
    // Find the middle
    const mid = Math.floor((start + end) / 2)

    // Found the element!
    if (collection[mid] === element) {
      return true
    } else if (collection[mid] < element) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return false
}
