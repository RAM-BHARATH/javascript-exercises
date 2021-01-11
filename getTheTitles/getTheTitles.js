const getTheTitles = function(objectArray) {
    let titles = objectArray.reduce((accumulator,present,index)=>{
        // console.log(typeof(accumulator));
        accumulator[`${index}`]=present.title;
        return accumulator;
    },[]);
    console.log(titles);
    return titles;
}

module.exports = getTheTitles;
