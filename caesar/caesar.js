const caesar = function(string,number) {
    let strArray = string.split('');
    number=number%26;
    if(number<0){
        number=26+number;
    }
    console.log(strArray);
    let cipher =[];
    strArray.forEach(char=> {
        if((char>='A' && char<='Z')||(char>='a'&&char<='z')){
            let asciiValue = 65;
            if(char>='A' && char<='Z'){
                asciiValue =(char.charCodeAt(0)+number);
                if(asciiValue>90){
                    asciiValue=asciiValue%90;
                    asciiValue+=64;
                }   
            }
            else if(char>='a'&&char<='z'){
                asciiValue =(char.charCodeAt(0)+number);
                if(asciiValue>122){
                    asciiValue=asciiValue%122;
                    asciiValue+=96;
                }
            }
            console.log("Original ASCII Value: "+char.charCodeAt(0)+" Changed ASCII value: "+asciiValue);
            let cipherChar = String.fromCharCode(asciiValue);
            cipher.push(cipherChar);   
        }
        else{
            cipher.push(char);
        }
    });
    console.log(cipher.join(''));
    return cipher.join('');
}
caesar('Hello, World!',75);
module.exports = caesar
