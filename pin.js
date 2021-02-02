function getPin() {

    var random = Math.floor(Math.random() * 10000);
    // var pin=(random+"").split(".")[0];
    var pin = random + "";
    if (pin.length === 4) {

        return pin;

    } else {
        getPin();
    }
};
//display generated pin


var generatePinBtn = document.getElementById("generatepinBtn");
generatePinBtn.addEventListener("click", function () {


    var pinInput = document.getElementById("pin");
    pinInput.value = getPin();

})
//Handle calculator btn handler
var digitContainer=document.getElementById("digit-container");
digitContainer.addEventListener("click",function(value){

 var digit=(value.target.innerText)
  if(isNaN(digit)){

   //handle backspace

   //handle clear

  }
  else{
      var typed=document.getElementById("typed-shower");
      typed.value=typed.value+digit;
     
  }

})
//verify Pin


var matchPin=document.getElementById("match-pin");
matchPin.addEventListener("click",function(){


    var pin = document.getElementById("pin").value;
    var typedPin=document.getElementById("typed-shower").value;

if(pin===typedPin){
    var typed=document.getElementById("typed-shower");
       typed.value="";
    var show=document.getElementById("match");
    show.style.display='block';
    var sho=document.getElementById("not-match");
    sho.style.display='none';
   
}
else{
    var sho=document.getElementById("not-match");
   sho.style.display='block';
   var typed=document.getElementById("typed-shower");
       typed.value="";
       var show=document.getElementById("match");
       show.style.display='none';
}


});

