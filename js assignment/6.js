window.onload = init;
 

function init() {

   document.getElementById("formTest").onsubmit = validateForm;
   
   document.getElementById("btnReset").onclick = clearForm;
   
   document.getElementById("txtName").focus();
}
 

function validateForm(theForm) {
   with(theForm) {
      // return false would prevent default submission
      return (isNotEmpty(txtName, "Please enter your name!", elmNameError)
            && isNumeric(txtPhone, "Please enter a valid phone number!", elmPhoneError)
            && isLengthMinMax(txtPhone, 10, 10,"Please enter a 10-digit Phone number!", elmPhoneError)
            && isNotEmpty(txtAddress,"Please enter your address", elmAddressError)
            && isNotEmpty(txtCity,"Please enter your city name", elmCityError)
            && isNotEmpty(txtState,"Please enter your State", elmStateError)
            && isNumeric(txtZipcode, "Please enter a 6-digit zip code!", elmZipcodeError)
            && isLengthMinMax(txtZipcode, 6, 6, "Please enter a 6-digit zip code!", elmZipcodeError)
          
      );
   }
}
 

function postValidate(isValid, errMsg, errElm, inputElm) {
   if (!isValid) {
      
      if (errElm !== undefined && errElm !== null
            && errMsg !== undefined && errMsg !== null) {
         errElm.innerHTML = errMsg;
      }
      
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.add("errorBox"); 
         inputElm.focus();
      }
   } else {
      
      if (errElm !== undefined && errElm !== null) {
         errElm.innerHTML = "";
      }
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.remove("errorBox");
      }
   }
}
 

function isNotEmpty(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim() !== "");
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

function isNumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\d+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

 

function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
   var inputValue = inputElm.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

function clearForm() {
   
   var elms = document.querySelectorAll('.errorBox');  
   for (var i = 0; i < elms.length; i++) {
      elms[i].classList.remove("errorBox");
   }
 
   
   elms = document.querySelectorAll('[id$="Error"]');  //id ends with error
   for (var i = 0; i < elms.length; i++) {
      elms[i].innerHTML = "";
   }
 
   // Set initial focus
   document.getElementById("txtName").focus();
}