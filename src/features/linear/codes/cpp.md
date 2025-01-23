bool linearSearch(int haystack[], int needle, int size)
{
    for (int i = 0; i < size; i++)
    {
        if (haystack[i] == needle)
            return true;
    }
    return false;
}