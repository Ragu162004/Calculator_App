const display = document.getElementById('display');

document.body.addEventListener("keydown", (event) => {
    console.log(event.key)
  switch(event.key)
  {
    case '0':
        display.value +=event.key;
        break;
    case '1':
        display.value +=event.key;
        break;
    case '2':
        display.value +=event.key;
        break;
    case '3':
        display.value +=event.key;
        break;
    case '4':
        display.value +=event.key;
        break;
    case '5':
        display.value +=event.key;
        break;
    case '6':
        display.value +=event.key;
        break;
    case '7':
        display.value +=event.key;
        break;
    case '8':
        display.value +=event.key;
        break;
    case '9':
        display.value +=event.key;
        break;
    case '/':
        display.value +=event.key;
        break;
    case '*':
        display.value +=event.key;
        break;
    case '-':
        display.value +=event.key;
        break;
    case '+':
        display.value +=event.key;
        break;
    case '%':
        display.value +=event.key;
        break;
    case '.':
        display.value +=event.key;
        break;
    case ('Enter' || '='):
        calculate();
        break;
    case 'Backspace':
       display.value = "";
        break;
    
  }
});

function appendDisplay(value) {
    display.value +=value;
}

function Clear() {
    display.value ="";
}

function calculate() {
    display.value =   eval(display.value);
}

