public class BasicJava {
    public static void printNums() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    public static void printOddNums() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
            i++;
        }
    }

    public static void printSum() {
        int sum = 0;
        for (int i = 0; i <= 255; i++) {
            sum = sum + i;
            System.out.println("New Number: " + i + " Sum: " + sum);
        }
    }

    public static void iterateArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
    
    public static void findMax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    public static void findAvg(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        double avg = sum/arr.length;
        return double;
    }

    public static void oddArray() {
        ArrayList<Integer> y = new ArrayList<Integer>();
        for (int i = 1; i <= 255; i+=2) {
            y.add(i);
        }
        System.out.println(y);
    }

    public static Integer greaterThanY(int[] arr, int y) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > y) {
                count++;
            }
        }
        return count;
    }

    public static void squareArr(int[] arr) {
        for (int i=0; i < arr.length; i++) {
            arr[i] = arr[i] + arr[i];
        }
    }

    public static void noNegatives(int[] arr) {
        for (int i=0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
    }

    public static void maxMinAvg(int[] arr) {
        int max = arr[0];
        int min = arr[0];
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
            if (arr[i] > max) {
                max = arr[i];
            }
            else if (arr[i] < min) {
                min = arr[i];
            }
        }

        double avg = sum/arr.length;
        int[] returnArr = [max, min, avg];
        return returnArr;
    }

    public static void shiftedArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length-1] = 0;
    }
}