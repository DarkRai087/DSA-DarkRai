public static void reverseArraySingleLoop(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        // Swap element at index i with its symmetric counterpart
        int temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
