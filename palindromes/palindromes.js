const palindromes = function(string) {
    string = string.toLowerCase();
    let a = [];
    for(i=0;i<string.length;i++){
        if(string[i]>='a' && string[i]<='z'){
            a.push(string[i]);
        }
    }
    // console.log(a.join(''));
    // console.log(a.reverse().join(''));
    // console.log(string);
    console.log(a.join('')===a.reverse().join(''));
    if(a.join('')===a.reverse().join('')){
        return true;
    }
    return false;
}

module.exports = palindromes
