public class BasicJavaTest {
    public static void main(String[] args) {
        BasicJava basics = new BasicJava();
        basics.printNums();
        basics.printOddNums();
        basics.printSum();

        int[] array1 = {1,3,5,7,9,13};
        basics.iterareArr(array1);
        basics.findMax(array1);
        basics.findAvg(array1);

        basics.oddArray();

        int[] array2 = {1, 3, 5, 7}
        int num = 3;
        basics.greaterThanY(array2, num);
        basics.squareArr(array2);

        int[] array3 = {0, 4, -6, 2, -3, -1, 9};
        basics.noNegatives(array3);
        basics.maxMinAvg(array3);
        basics.shiftedArr(array3);
    }
}