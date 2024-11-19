public static void reverseArrayTwoPointer(int[] arr) {
    int left = 0;              // Start pointer
    int right = arr.length - 1; // End pointer

    while (left < right) {
        // Swap elements at left and right
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers closer
        left++;
        right--;
    }
}
