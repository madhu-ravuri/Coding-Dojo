public class StringManipulator {
    public String trimAndConcat(String str1, String str2) {
        String new1 = str1.trim();
        String new2 = str2.trim();
        return (new1.concat(new2));
    }

    public Integer getIndexOrNull(String str, char letter) {
        int index = str.indexOf(letter);
        if (index < 0) {
            return null;
        }
        else {
            return index;
        }
    }

    public Integer getIndexOrNull(String str1, String str2) {
        int index = str1.indexOf(str2);
        if (index < 0) {
            return null;
        }
        else {
            return index;
        }
    }

    public String concatSubstring(String str1, int num1, int num2, String str2) {
        String newSub = str1.substring(num1, num2);
        String substr = newSub.concat(str2);
        return substr;
    }
}