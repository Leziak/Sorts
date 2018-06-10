const insertion_sort = (arr) => {
    let sorted = [];
    let min = 2**31 - 1;
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            if(arr[j]<min) min = arr[j];
        }
        sorted.push(min);
        arr[arr.indexOf(min)] =  2**31 - 1;
        min = 2**31 - 1;
    }
    return sorted;
}

console.log(insertion_sort([5,3,4,1,2,7,6]))
