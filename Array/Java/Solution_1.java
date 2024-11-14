import java.util.Arrays;

public class Solution_1 {
    public static void main(String[] args) {
        int[] arr = { 5, 2, 9, 1, 7 };

        int max = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);
        int min = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);

        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
    }
}