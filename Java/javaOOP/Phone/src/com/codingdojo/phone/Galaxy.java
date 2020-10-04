package com.codingdojo.phone;

public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
    	return String.format("Galaxy %s says %s", super.getVersionNumber(), super.getRingTone());
    }
    @Override
    public String unlock() {
    	return "Unlocking via fingerprint";
    }
    @Override
    public void displayInfo() {
    	System.out.println(String.format("Galaxy %s from %s", super.getVersionNumber(), super.getCarrier()));           
    }
}
