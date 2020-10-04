import java.util.Set;
public class Tracklist {
    public static void main(String[] args) {
        HashMap<String, String> trackMap = new HashMap<String, String>();

        trackMap.put("Accident", "it's your fault");
        trackMap.put("Stealer", "is it an addiction?");
        trackMap.put("Flash", "fly high");
        trackMap.put("Butterfly", "is it true?");

        String titleTrack = trackMap.get("Flash");
        System.out.println(titleTrack);

        Set<String> tracks = trackMap.trackSet();
        for(String track : tracks) {
            System.out.println(track);
            System.out.println(trackMap.get(track));
        }
    }
}