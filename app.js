

function cleartext(){
    let lcd = document.getElementById('lcd');
        if(lcd.value != ''){
            lcd.value = '';
        }
 

}

function calculate(){
    let lcd = document.getElementById('lcd');
    let val = lcd.value; 
    let lastChar = val.charAt(val.length - 1);
    console.log(lastChar)
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == 'R'){
        lcd.value = "ERROR"
    }else{
        lcd.value = eval(lcd.value)
    }
} 