const textBox = document.getElementById("textBox");
const tofahrenheit= document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temperature = 0;

function convert() {
    if(tofahrenheit.checked)
        {
            
        temperature =Number(textBox.value);
        temperature = (temperature* 9/5) + 32;
        result.textContent = temperature + "°F" ;

        } 
    else if(tocelsius.checked){
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * 5/9;
        result.textContent = temperature + "°C" ;
    }
    else{
        result.textContent = "Select a unit";
    }
    
        
    
}

