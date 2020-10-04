package com.madhu.calculator;

public class Calculator implements java.io.Serializable {
	private double operandOne;
	private double operandTwo;
	private String operation;
	private double results;
	
	public double getOperandOne() {
		return operandOne;
	}
	
	public void setOperandOne(double num) {
		this.operandOne = num;
	}
	
	public double getOperandTwo() {
		return operandTwo;
	}
	
	public void setOperandTwo(double num) {
		this.operandTwo = num;
	}
	
	public String getOperation() {
		return operation;
	}
	
	public void setOperation(String symbol) {
		this.operation = symbol;
	}
	
	public double getResults() {
		return results;
	}
	
	public void setResults(double num) {
		this.results = num;
	}
	
	public void performOperation() {
		if (operation == "+") {
			double sum = getOperandOne() + getOperandTwo();
			setResults(sum);
		}
		else if (operation == "-") {
			double sum = getOperandOne() - getOperandTwo();
			setResults(sum);
		}
		else {
			System.out.println("Operation not recognized, please try again.");
		}
	}

}
