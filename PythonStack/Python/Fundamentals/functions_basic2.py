def countdown(num):
    countList = []
    
    for i in range(num, -1, -1):
        countList.append(i)

    return countList


def printAndRet(list):
    print(list[0])
    return list[1]

numList = [2, 4]
print(printAndRet(numList))


def firstLength(list):
    sum = list[0] + len(list)

    return sum


nums = [1,2,3,4,5]
print(firstLength(nums))


def valuesGreater(list):
    greatList = []

    for i in range(len(list)):
        if len(list) < 2:
            return False
        elif list[i] > list[1]:
            greatList.append(list[i])
        
    print(len(greatList))
    return greatList

nums = [1,2,3,4,5]
print(valuesGreater(nums))


def thisThat(size, value):
    valueList = []

    for i in range(0, size, 1):
        valueList.append(value)
    
    return valueList

print(thisThat(6,2))