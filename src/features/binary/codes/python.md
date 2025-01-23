def binary_search(haystack, needle):
    low = 0
    high = len(haystack) - 1

    while low <= high:
        mid = (low + high) // 2

        if haystack[mid] == needle:
            return True  # Target found
        elif haystack[mid] < needle:
            low = mid + 1  # Move the left pointer to the right half
        else:
            high = mid - 1  # Move the right pointer to the left half

    return False  # Target not found
