console.log('hello world');

// buttons
const btnDigit = document.querySelectorAll('.digit')
const btnOperator = document.querySelectorAll('.operator')
const btnDel = document.querySelector('.delete')
const btnEqual = document.querySelector('.equal')
const btnDecimal = document.querySelector('.decimal')

// screen
const topRow = document.querySelector('#top-row')
const firstNumber = document.querySelector('#first-number')
const secondNumber = document.querySelector('#second-number')
const setOperator = document.querySelector('#operation')

let tempFirstNum = []
let tempSecondNum = []
let prevResult = ''
let currentResult = ''
let inputType = 'firstNumber'

for (let i=0; i<btnDigit.length; i++){

    btnDigit[i].addEventListener('click',function(e){
        if (inputType == 'firstNumber'){
            tempFirstNum.push(btnDigit[i].textContent)
            firstNumber.textContent = tempFirstNum.join('')
            // console.log(firstNumber.textContent);
        }
        else if (inputType == 'secondNumber'){
            tempSecondNum.push(btnDigit[i].textContent)
            secondNumber.textContent = tempSecondNum.join('')
            // console.log(secondNumber.textContent);
        }

    })
}

for (let i=0; i<btnOperator.length; i++){
    btnOperator[i].addEventListener('click',function(e){
        // console.log(btnOperator[i].textContent);
        if(tempSecondNum == ""){
            if (inputType == 'firstNumber'){
                inputType = 'secondNumber'
            }
            setOperator.textContent = btnOperator[i].textContent
        }
        else{
            if (inputType == 'secondNumber'){
                perfOperator()
                prevResult = currentResult
                firstNumber.textContent = currentResult
                secondNumber.textContent = ''
                tempSecondNum = []
                updateScreen()
    
            }
            if (inputType == 'firstNumber'){
                inputType = 'secondNumber'
            }
    
            setOperator.textContent = btnOperator[i].textContent
        }

    })
}

btnEqual.addEventListener('click',function(){
    if (inputType == 'secondNumber'){
        perfOperator()
        prevResult = currentResult
        firstNumber.textContent = currentResult
        secondNumber.textContent = ''
        setOperator.textContent = ''
        tempSecondNum = []
        updateScreen()
    }
    tempFirstNum = []
    inputType = 'firstNumber'
    
})

btnDecimal.addEventListener('click',function(){
    if (inputType == 'firstNumber'){
        if(!tempFirstNum.includes('.')){
            tempFirstNum.push('.')
            firstNumber.textContent = tempFirstNum.join('')
        } 
    }
    else if (inputType == 'secondNumber'){
        if(!tempSecondNum.includes('.')){
            tempSecondNum.push('.')
            secondNumber.textContent = tempSecondNum.join('')
        }
        
    }
})

btnDel.addEventListener('click',function(){
    // if wala pa 2nd number, operator delete
    // if first number pa lang, first number lang mag delete
    // then if naa second number ,sa 2nd number mag delete
})


function perfOperator(){
    if(setOperator.textContent == '+'){
        currentResult = Number(firstNumber.textContent)+Number(secondNumber.textContent)
    }
    if(setOperator.textContent == '-'){
        currentResult = Number(firstNumber.textContent)-Number(secondNumber.textContent)
    }
    if(setOperator.textContent == '×'){
        currentResult = Number(firstNumber.textContent)*Number(secondNumber.textContent)
    }
    if(setOperator.textContent == '➗'){
        currentResult = Number(firstNumber.textContent)/Number(secondNumber.textContent)
    }
}



function updateScreen(){
    topRow.textContent = firstNumber.textContent
}
