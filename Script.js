const obj={sunSign:["Aries","Saggitarius","Leo","Cancer","Taurus","Pisces","Gemini","Scorpio",
"Libra","Virgo","Capricorn","Aquarius"],dailyPrediction:["Good","Bad","Average","Ordinary","Outstanding",
"Ok","Exciting"],donts:["smoke","drink","drive","eat non-veg","party","argue with boss","go outside your home"]}

//console.log(obj);

//Below function generates random number between 0 and n, where n is passed as an argument.

const randomNumber=n=>{
    return Math.floor(Math.random(0,1)*n)
}

//console.log(randomNumber(5));

const mixedMessage=()=>{
    console.log(`Hello User, Your Sunsign is ${obj.sunSign[randomNumber(obj.sunSign.length)]}
    Your Day Shall be ${obj.dailyPrediction[randomNumber(obj.dailyPrediction.length)]}
    and you should not ${obj.donts[randomNumber(obj.donts.length)]} today`)
}

mixedMessage();