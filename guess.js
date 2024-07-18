const range_button=document.getElementById("b1");
const guess_button=document.getElementById("b2");
const max_value=document.getElementById("inp2");
const min_value=document.getElementById("inp1");
const guess_value=document.getElementById("inp3");
const display=document.getElementById("p2");
const attempts=document.getElementById("p4");
let max,min,random;
let attempt=0;
function RandInt(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}
range_button.onclick=function(){
     max=Number(max_value.value);
     min = Number(min_value.value);
    if(isNaN(max)||isNaN(min)){
      display.textContent="enter a number";
    }
    else{
    random =RandInt(max,min);
   display.textContent="Range is set start guessing";
   attempt=0;
   attempts.textContent=`${attempt}`;
}
}
 guess_button.onclick=function(){
    const g=Number(guess_value.value);
    if(isNaN(g)){
        display.textContent="Not a number";

    }
    else if(g>max||g<min){
        display.textContent="out of range";
    }
    else if (random === undefined) {
        display.textContent = "Set the range first.";
    }
    else{
        if(g>random){
            display.textContent="The guess is too high";
        }
        else if(g<random){
            display.textContent="The guess is too low";
        }
        else{
            display.textContent=`Yes you are correct. The number was ${random}`;
        }
        attempt++;
        attempts.textContent=`${attempt}`;
        
    }
    
}


