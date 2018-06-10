def insertion_sort(arr):
    sorted = []
    min = 2**31 - 1
    for i in arr:
        for j in arr:
            if(j<min): 
                min = j
        sorted.append(min)
        arr[arr.index(min)] = 2**31 - 1
        min = 2**31 - 1
    return sorted

print(sorted([5,3,4,1,2,7,6]))
