def linear_search(haystack, needle):
    for i in range(len(haystack)):
        if haystack[i] == needle:
            return True
    return False