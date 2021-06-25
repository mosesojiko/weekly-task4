function dropElements(arr, func) {
    //if the first item in the arr does not meet our condition, remove it
    while(arr.length && !func(arr[0])){
        arr.splice(0, 1)
    }
 console.log(arr)
 return arr
}
dropElements([1, 2, 3, 4], function(n){ return n >= 3 })