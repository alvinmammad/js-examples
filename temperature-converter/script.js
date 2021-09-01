const celciusInput = document.querySelector('#celcius')
const fahrenheitInput = document.querySelector('#fahrenheit')
const kelvinInput = document.querySelector('#kelvin')

const inputs = document.getElementsByClassName('input');

for(let i=0;i<inputs.length;i++){
    let input = inputs[i];
    input.addEventListener('input',(e)=>{
        let value = parseFloat(e.target.value);
        switch(e.target.name){
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    })
}
