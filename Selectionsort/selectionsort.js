const selectionSort = (arr) => {
    let min = 2**31 - 1;
    let temp = 0;
    let num = 0;
    for(let i = 0;i < arr.length;i++){
        num = i;
        for(let j = num;j < arr.length;j++) if(arr[j]<min) min = arr[j]
        temp = arr[num];
        arr[arr.indexOf(min)] = temp;
        arr[num] = min
        min = 2**31 - 1;
    }
    return arr;
}


console.log(selectionSort([5,3,4,1,2,7,6]))