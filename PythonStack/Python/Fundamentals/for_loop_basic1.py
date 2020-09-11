# basic
for i in range(151):
    print(i)

# multiples of five
for i in range(5, 1001, 5):
    print(i)

# counting, the dojo way
for i in range(1, 101, 1):
    if (i % 10 == 0):
        print("Coding Dojo")
    elif (i % 5 == 0):
        print("Coding")
    else:
        print(i)

# woah, that sucker's huge
sum = 0
for i in range(0, 500000, 2):
    sum = sum + i

print(sum)

# countdown by fours
for i in range(2018, 0, -4):
    print(i)

# flexible counter
lowNum = 2
highNum = 21
mult = 5

for i in range(lowNum, highNum, 1):
    if (i % mult == 0):
        print(i)