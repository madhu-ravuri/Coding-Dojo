class User:		
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    
    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount 
        return self

    def display_user_balance(self):
        print(self.account_balance)
        return self

#create class BankAccount
class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
    
    #deposit method
    def deposit(self, amount):
        self.balance += amount
        return self

    #withdrawal method
    def withdraw(self, amount):
        self.balance -= amount
        return self
    
    #print balance
    def display_balance(self):
        statement = f"Balance: ${self.balance}"
        print(statement)
        return self
    
    #interest method
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + (self.balance * self.int_rate)
        return self

#create two accounts
checkings = BankAccount(int_rate=0.04, balance=1200)
savings = BankAccount(int_rate=0.02, balance=10000)

#make transactions
checkings.deposit(200).deposit(55).deposit(100).yield_interest().display_balance()
savings.deposit(1200).deposit(4000).withdraw(600).withdraw(1000).withdraw(300).withdraw(100).yield_interest().display_balance()
