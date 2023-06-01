let ccInput = '';

//everytime DOmContentLoaded occurs, callback func will execute
document.addEventListener("DOMContentLoaded", function(){ 
    var nextButtonRef = document.getElementById('nextState')
    nextButtonRef.disabled = true;
})

function clearInputBox(){
    let inputBoxRef = document.getElementById('inputId')
    inputBoxRef.value = ''
}

function next(){
    //everytime next is clicked, we need to show a next character starting from the right/end
    var luhnsOutputContainerRef = document.getElementById("luhns-output")

    var section = document.createElement("section");
    section.innerHTML = "section";

    luhnsOutputContainerRef.appendChild(section)
}
// document.addEventListener("DOMContentLoaded", function(){
//     var luhnsOutputContainerRef = document.getElementById("luhns-output");
//     var nextButton = document.getElementById("nextState")

//     nextButton.addEventListener("click", function(){
//         createMultipleSections()
//     })
// })

// //function to create multiple sections
// function createMultipleSections(){
//     //define number of sections to create
//     let numSections = 5
//     //generate multiple sections in reverse loop
//     for(let i =numSections-1; i=>0; i--){
//         var section = document.getElementById("section")
//         section.innerHTML = "section" +  (i + 1);

//         luhnsOutputContainerRef.appendChild(section)

//     };
// }


function validateCC (){
    let ccInputRef = document.getElementById('inputId')
    ccInput = ccInputRef.value 
    console.log(ccInput)

    var nextButtonRef = document.getElementById('nextState')
    nextButtonRef.disabled = false;

}


function validateCred(){
    var ccValidateStatusRef = document.getElementById('ccValidateStatus')
    var ccInputRef = document.getElementById('cardNumber')
    let ccInput  = ccInputRef.value

    if(ccInput == "") {
        ccValidateStatusRef.innerText = "input cannot be empty"
        return;
    }

    let arr = ccInput.split("")
    let reverseArray = arr.reverse();

    console.log(reverseArray)
    

    let sum = 0;
    // console.log(reverseArray)
    for(let i = 0; i<arr.length; i++){
        let value = reverseArray[i];
        value = Number(value)
        if(i%2==1){
            value = value*2
            if(value > 9){
                value = value - 9
            }
        }
        sum = sum + value
    }
    
    // let ccValidateStatus = ccValidateStatusRef.value
    if(sum%10 == 0){
        // get reference to status then update it
        
        ccValidateStatusRef.innerText = "Valid"

    //    return 'valid' 

    }else {
        ccValidateStatusRef.innerText = "Invalid"
    }
}


