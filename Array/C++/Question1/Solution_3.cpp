// 1. Find the Maximum and Minimum Element in an Array

// Using algorithm library (sort)

// directly access the first and last elements

#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int arr[] = {3, 7, 2, 5, 9, 1};
    int n = sizeof(arr) / sizeof(arr[0]);

    sort(arr, arr + n);

    cout << "Maximum: " << arr[n - 1] << endl;
    cout << "Minimum: " << arr[0] << endl;

    return 0;
}