function calculator(){
    var operator=document.getElementById('operator').value;
    let num1=parseFloat(document.getElementById('val1').value);
    let num2=parseFloat(document.getElementById('val2').value);
    var result;
    switch(operator){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
          result=num1*num2;
            break;
        case '%':
          result=num1%num2;
            break;
        case '/':
            result=num1/num2;
            break;                                            
        case '**':
             result=num1**num2; 
            break;                    
            default:
                result='enter a valid operator';
                console.log('invalid')
    
    
    }
    document.getElementById('result').value=result;
    }