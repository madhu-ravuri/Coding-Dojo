class User:		
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
    	self.account_balance += amount	# the specific user's account increases by the amount of the value received
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount 
        return self

    def display_user_balance(self):
        print(self.account_balance)
        return self
    
han = User(name="Han", email="han@woo.com")

josh = User("Josh", "joshi@hong.com")

louis = User("Louis", "louis@cho.com")

# han.make_deposit(50)
# han.make_deposit(300)
# han.make_deposit(100)
# han.make_withdrawal(10)
# han.display_user_balance()

han.make_deposit(50).make_deposit(300).make_deposit(100).make_withdrawal(10).display_user_balance()

# josh.make_deposit(20)
# josh.make_deposit(600)
# josh.make_withdrawal(100)
# josh.make_withdrawal(50)
# josh.display_user_balance()

josh.make_deposit(20).make_deposit(600).make_withdrawal(100).make_withdrawal(50).display_user_balance()

# louis.make_deposit(800)
# louis.make_withdrawal(50)
# louis.make_withdrawal(100)
# louis.make_withdrawal(50)
# louis.display_user_balance()

louis.make_deposit(800).make_withdrawal(50).make_withdrawal(100).make_withdrawal(50).display_user_balance()
