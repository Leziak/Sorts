// function bubbleSort(arr) {
//     for(let i = 0;i<arr.length;i++) for(let j =0;j<arr.length;j++) if(arr[j]>arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//     return arr;
// }

function bubbleSort(arr) {
    for(let i = 0;i<arr.length;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,3,4,1,2,7,6]))