package com.codingdojo.bankaccount;
import java.util.Random;

public class BankAccount {
	private String accountNumber = "";
	private double checkingsBal = 0;
	private double savingsBal = 0;
	
	private static int countAcc = 0;
	private static double totalAmount = 0;
	
	private String assignAccNum() {
		Random r = new Random();
		for(int i = 0; i < 10; i++) {
			 accountNumber += Integer.toString(r.nextInt(10));
		}
		return accountNumber;
	}
	
	public BankAccount() {
		assignAccNum();
		countAcc++;
	}
	
	public double getCheckingsBal() {
		return checkingsBal;
	}
	
	public double getSavingsBal() {
		return savingsBal;
	}
	
	public void depositCheck(double deposit) {
		checkingsBal += deposit;
		totalAmount += deposit;
	}
	
	public void depositSavings(double deposit) {
		savingsBal += deposit;
		totalAmount += deposit;
	}
	
	public void withdrawCheck(double request) {
		if (checkingsBal > request) {
			checkingsBal -= request;
			totalAmount -= request;
		}
		else {
			System.out.println("Not enough funds for this withdrawal.");
		}
	}
	
	public void withdrawSavings(double request) {
		if (savingsBal > request) {
			savingsBal -= request;
			totalAmount -= request;
		}
		else {
			System.out.println("Not enough funds for this withdrawal.");
		}
	}
	
	public void checkBalances() {
		String statement = "Checking: " + checkingsBal + " Savings: " + savingsBal;
		System.out.println(statement);
	}

}
