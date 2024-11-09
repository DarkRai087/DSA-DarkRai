// 1. Find the Maximum and Minimum Element in an Array
// Using a Recursive Approach
// using <climits> library

#include <iostream>
#include <climits>

using namespace std;

int main()
{
    int arr[] = {3, 7, 2, 5, 9, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = INT_MIN;
    int min = INT_MAX;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > max)
            max = arr[i];
        if (arr[i] < min)
            min = arr[i];
    }
    cout << " maximun : " << max << endl;
    cout << " minimum : " << min << endl;
}