const fibonacci = function(number) {
    if(number<0){
        return "OOPS";
    }
    arr=[1,1];
    for(i=2;i<number;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    console.log(arr[number-1]);
    return arr[number-1];
}

module.exports = fibonacci
