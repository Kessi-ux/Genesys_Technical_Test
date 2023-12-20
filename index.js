function nthMostRarest(list, n) {
  // Count occurrences of each element in the list
  const frequencyMap = new Map();
  list.forEach((item) => {
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
  });

  // Create an array of unique elements in the list
  const uniqueElements = Array.from(new Set(list));

  // Sort unique elements based on their frequency in ascending order
  uniqueElements.sort((a, b) => frequencyMap.get(a) - frequencyMap.get(b));

  // Return the nth rarest item
  return uniqueElements[n - 1];
}

// Example usage:
const myList = [1, 2, 3, 1, 2, 4, 5, 4, 3, 6];
const nthRarest = 2;
const result = nthMostRarest(myList, nthRarest);
