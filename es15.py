a = input("Enter your array:").split()
a = [int(x) for x in a]
avg = sum(a) / int(len(a))
answer=[]
print("Mean: " ,avg)
(sorted(a))
print('Mode: ',max(set(a),key=a.count))
def findMiddle(input_list):
    middle = float(len(input_list))/2
    if middle % 2 != 0:
        return input_list[int(middle - .5)]
    else:
        return (input_list[int(middle)], input_list[int(middle-1)])
print('Median: ',findMiddle(sorted(a)))
