public class PythagoreanTest {
    public static void main(String[] args) {
        Pythagorean test = new Pythagorean();
        int legA = 4;
        int legB = 3;
        double hypotenuse = test.calculateHypotenuse(legA, legB);
        System.out.println(hypotenuse);
    }
}
