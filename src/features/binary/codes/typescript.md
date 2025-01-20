function binarySearch(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (haystack[mid] === needle) {
      return true; // Target found
    } else if (haystack[mid] < needle) {
      low = mid + 1; // Discard the left half
    } else {
      high = mid - 1; // Discard the right half
    }
  }
  return false; // Target not found
}
