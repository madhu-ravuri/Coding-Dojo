package com.codingdojo.bankaccount;

public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount acc = new BankAccount();
		
		acc.depositCheck(230);
		acc.depositSavings(438.27);
		
		acc.withdrawCheck(32);
		acc.withdrawSavings(500);
		
		acc.checkBalances();

	}

}
