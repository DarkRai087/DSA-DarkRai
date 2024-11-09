// 1. Find the Maximum and Minimum Element in an Array

// Using algorithm library

// using the minimum and maximum elements in a range
#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int arr[] = {3, 7, 2, 5, 9, 1};
    int n = sizeof(arr) / sizeof(arr[0]);                 // Calculate the number of elements in the array
    auto [min_it, max_it] = minmax_element(arr, arr + n); // Find the minimum and maximum elements
    cout << " Maximun : " << *max_it << endl;             // iterator max_it to get the value of the maximum element and outputs it
    cout << " Minimum : " << *min_it << endl;             // iterator min_it to get the value of the minimum element and outputs it
    cout << " Size of the array: " << n << endl;
}