def biggieSize(list):
    for i in range(len(list)):
        if list[i] > 0:
            list[i] = "big"
    
    return list

nums = [-1, 2, 5, -3]
print(biggieSize(nums))


def countPos(list):
    count = 0

    for i in range(len(list)):
        if list[i] > 0:
            count += 1
        
    list[len(list) - 1] = count
    return list

nums = [-1, 1, 1, 4]
print(countPos(nums))


def sumTotal(list):
    sum = 0

    for i in range(len(list)):
        sum = sum + list[i]
    
    return sum

nums = [1, 2, 3]
print(sumTotal(nums))


def averages(list): 
    sum = 0

    for i in range(len(list)):
        sum = sum + list[i]
    
    avg = sum/len(list)

    return avg

nums = [1, 2, 3, 4]
print(averages(nums))


def length(list):
    return len(list)

nums = [4, 7, 2, 4]
print(length(nums))


def minimum(list):
    min = list[0]

    for i in range(len(list)):
        if len(list) == 0:
            return False
        else:
            if list[i] < min:
                min = list[i]
    
    return min

nums = [5, 3, 9, -2]
print(minimum(nums))


def maximum(list):
    max = list[0]

    for i in range(len(list)):
        if len(list) == 0:
            return False
        else:
            if list[i] > max:
                max = list[i]
    
    return max

nums = [5, 3, 9, -2]
print(maximum(nums))