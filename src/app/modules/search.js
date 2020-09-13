const findList =  function (valueIn, findValue){
    for (let i = 0; i < findValue.length; i++)   
        if (valueIn.includes(findValue[i]) == true) 
            return findValue[i] == valueIn  
}

module.exports = findList 

