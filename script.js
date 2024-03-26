function fibs(lenght){
    let fib=[0,1]
    for(let i=2;i<lenght;i++){
        fib.push(fib[i-1]+fib[i-2])
    }
    return fib
}

function fibsRec(n, array = [0, 1]) {
    if (n <= 2) return array.slice(0, n);

    if (array.length >= n) 
        return array;
    array.push(array[array.length - 1] + array[array.length - 2]);

    return fibsRec(n, array);
}

function mergeSort(array){
    const midpoint=Math.ceil(array.length/2)
    if(array.length==1){
        return array
    }
    let sortedArr=[]
    const firstHalf=mergeSort(array.slice(0,midpoint));
    const secondHalf=mergeSort(array.slice(midpoint));
    while(firstHalf.length>0 && secondHalf.length>0){
        if(firstHalf[0]<secondHalf[0])
        {
            sortedArr.push(firstHalf.shift())
        }
        else if(firstHalf[0]>secondHalf[0])
        {
            sortedArr.push(secondHalf.shift())
        }
        else if(firstHalf[0]==secondHalf[0])
            sortedArr.push(firstHalf.shift())
    }
    if(firstHalf.length>0)
        sortedArr=sortedArr.concat(firstHalf)
    if(secondHalf.length>0)
        sortedArr=sortedArr.concat(secondHalf)
    return sortedArr
}
let unsortedArray = [87, 18, 63, 99, 64, 79, 92, 69, 8, 7, 65, 73, 21, 35, 71];

console.log(fibs(10));
console.log(fibsRec(10))
console.log(mergeSort([0,2,5,7,9,456,789,12,456,45]))
console.log(mergeSort(unsortedArray))