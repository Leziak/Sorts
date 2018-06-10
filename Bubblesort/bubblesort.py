def bubbleSort(arr):
    for i in arr:
        for j, item in enumerate(arr):
            if((arr[j] != arr[len(arr)-1]) and (arr[j] > arr[j+1])):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubbleSort([5,3,4,1,2,7,6]))