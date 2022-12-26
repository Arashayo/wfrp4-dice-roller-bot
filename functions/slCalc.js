function testRoll()
{
    return(Math.floor(Math.random()*100) + 1);
}

//Checks if roll has the same two digits (in WFRP it means there is critcal hit)
function checkCrit(roll)
{
    const rollString = roll.toString();
    for (let i = 1; i < rollString.length; i++){
      if(rollString[i] !== rollString[0]){
        return false;
      }
      return true;
    }
}

function simpleCheck(skill, roll)
{
    if(skill>roll){
        return(`Success`);
    }
    else{
        return(`Fail`);
    }
}

function sl(skill, roll)
{
    let result = (Math.floor(skill/10)%10)-(Math.floor(roll/10)%10);
    switch (true) {
        case (result >= 6):

          return(`${result}, Astounding Success`);
          break;
        case (result >= 4):

          return(`${result}, Impressive Success`);
          break;
        case (result >= 2):

          return(`${result}, Success`);
          break;
        case (result >= 0):

          return(`${result}, Marginal Success`);
          break;
        case (result >= -1):

          return(`${result}, Marginal Failure`);
          break;
        case (result >= -3):

          return(`${result}, Failure`);
          break;
        case (result >= -5):

          return(`${result}, Impressive Failure`);
          break;
        default:
          
          return(`${result}, Astounding Failure`);
      }
}

module.exports = {testRoll, checkCrit, simpleCheck, sl};