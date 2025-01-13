int linearSearch(int n, int[] haystack, int needle) {
  for(int i = 0; i < n; i++) {
    if(haystack[i] === needle) {
      return 1;
    }
  }
  return 0;
}