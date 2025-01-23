bool binarySearch(int haystack[], int needle, int size)
{
    int low = 0;
    int high = size - 1;

    while (low <= high)
    {
        int mid = floor((low + high) / 2);

        if (haystack[mid] == needle)
        {
            return true; // Target found
        }
        else if (haystack[mid] < needle)
        {
            low = mid + 1; // Discard the left half
        }
        else
        {
            high = mid - 1; // Discard the right half
        }
    }
    return false; // Target not found
}