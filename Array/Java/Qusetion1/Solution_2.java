package Qusetion1;

import java.util.Arrays;

public class Solution_2 {
    public static void main(String[] args) {
        int[] arr = { 5, 2, 9, 1, 7 };
        Arrays.sort(arr);
        System.out.println("Maximum: " + arr[arr.length - 1]);
        System.out.println("Minimum: " + arr[0]);
    }
}
