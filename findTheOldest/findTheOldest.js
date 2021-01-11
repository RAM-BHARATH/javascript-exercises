let findTheOldest = function(ObjectArr) {
    let sortArr = ObjectArr.sort((present,other)=>{
        if(present.yearOfDeath===undefined){
            present.yearOfDeath=new Date().getUTCFullYear();
            console.log("Present year of death : "+present.yearOfDeath);
        }
        if(other.yearOfDeath===undefined){
            other.yearOfDeath=new Date().getUTCFullYear();
            console.log("Other year of death : "+other.yearOfDeath);
        }
        console.log("Present: "+present.name+" other: "+other.name);
        return (present.yearOfDeath-present.yearOfBirth)-(other.yearOfDeath-other.yearOfBirth);
    });
    console.log(sortArr);
    return sortArr[sortArr.length-1];
}


module.exports = findTheOldest
