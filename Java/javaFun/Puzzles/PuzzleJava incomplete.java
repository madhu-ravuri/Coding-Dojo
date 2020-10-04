import java.util.Collections;
import java.util.Random;

public class PuzzleJava {
    public static Integer greaterThanTen(int[] arr) {
        int[] newArr = [];
        for (int i=0; i<arr.length; i++) {
            System.out.println(arr[i]);
            if (arr[i] > 10) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    public static String shuffleNames(String[] arr) {
        String[] newArr = [];

        Collections.shuffle(arr);
        for (int i=0; i<arr.length; i++) {
            System.out.println(arr[i]);
            if (arr[i].length > 5) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    public static String shuffleLetters(String[] arr) {
        Collections.shuffle(arr);
        System.out.println(arr[24]);
        System.out.println(arr[0]);
        if (arr[0] == "a" || arr[0] == "e" || arr[0] == "i" || arr[0] == "o" || arr[0] == "u") {
            System.out.println("You've found a vowel!");
        }
    }

    public static Integer randomInt(int[] arr) {
        Random r = new Random();
        int[] newArr = [];

        for (int i = 0; i < 10; i++) {
            newArr.add(r.nextInt(46) + 55);
        }

        return newArr;
    }

}