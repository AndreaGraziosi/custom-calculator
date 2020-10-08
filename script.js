
const inputwalk = document.querySelector('#walk')
const inputdrive = document.querySelector('#drive')
const inputfly = document.querySelector('#planes')
const answerWalk = document.querySelector("#answerw")
const answerDrive = document.querySelector("#answerd")
const answerFly = document.querySelector("#answerf")

 
inputwalk.addEventListener("input", calculateWalk)
//---------------------------------------------------------------------------
function calculateWalk() {
//calculate walk takes in the miles distance of the equator and divides it by the inputed mph walking speed and divided by 24 to get days  

const walkAround = parseInt((24901/inputwalk.value)/24)
console.log(walkAround, "walkAround")
answerWalk.innerHTML = (` Walking around: ${walkAround}`)

}

calculateWalk()


//----------------------------------------------------------------------------

inputdrive.addEventListener('input', calculateDrive)
//Calculate drives takes in the driving speed mph to calculate how long it would take to drive the length of the equator

function calculateDrive() {


    const driveAround = (24901/inputdrive.value)/24
    console.log(driveAround, "driveAround")
    answerDrive.innerHTML = (`Driving around: ${driveAround}`)
    
    }
    
    calculateDrive()
    
    //----------------------------------------------------------------


//this drop down list would return a string value based on which plane was selected
function btn001() {
   
  document.getElementById("answerf").innerHTML = "On a comercial flight: 2 days"
  
}



function btn002() {
   
  document.getElementById("answerf").innerHTML = "On a jet x-15 flight: 6 hours!"
  
}
btn001()
btn002()