package Qusetion1;

public class solution3 {
    public static void findMinMax(int[] arr, int low, int high, int[] minMax) {
        if (low == high) {
            minMax[0] = arr[low];
            minMax[1] = arr[high];
        } else if (high == low + 1) {
            minMax[0] = Math.min(arr[low], arr[high]);
            minMax[1] = Math.max(arr[low], arr[high]);
        } else {
            int mid = (low + high) / 2;
            int[] leftMinMax = new int[2];
            int[] rightMinMax = new int[2];

            findMinMax(arr, low, mid, leftMinMax);
            findMinMax(arr, mid + 1, high, rightMinMax);

            minMax[0] = Math.min(leftMinMax[0], rightMinMax[0]);
            minMax[1] = Math.max(leftMinMax[1], rightMinMax[1]);
        }
    }

    public static void main(String[] args) {
        int[] arr = { 5, 2, 9, 1, 7 };
        int[] minMax = new int[2];

        findMinMax(arr, 0, arr.length - 1, minMax);

        System.out.println("Maximum: " + minMax[1]);
        System.out.println("Minimum: " + minMax[0]);
    }
}