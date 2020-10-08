
const inputwalk = document.querySelector('#walk')
const inputdrive = document.querySelector('#drive')
const inputfly = document.querySelector('#planes')
const answerWalk = document.querySelector("#answerw")
const answerDrive = document.querySelector("#answerd")
const answerFly = document.querySelector("#answerf")

 
inputwalk.addEventListener("input", calculateWalk)
//---------------------------------------------------------------------------
function calculateWalk() {


const walkAround = parseInt((24901/inputwalk.value)/24)
console.log(walkAround, "walkAround")
answerWalk.innerHTML = (` Walking around: ${walkAround}`)

}

calculateWalk()


//----------------------------------------------------------------------------

inputdrive.addEventListener('input', calculateDrive)

function calculateDrive() {


    const driveAround = (24901/inputdrive.value)/24
    console.log(driveAround, "driveAround")
    answerDrive.innerHTML = (`Driving around: ${driveAround}`)
    
    }
    
    calculateDrive()
    
    //----------------------------------------------------------------

    //inputfly.addEventListener ('select', calculatefly)

function btn001() {

  document.getElementById("answerf").innerHTML = "On a comercial flight: 2 days"
}

function btn002() {
   
  document.getElementById("answerf").innerHTML = "On jet x-15 flight: 6 hours!"
}

