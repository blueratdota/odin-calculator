console.log('hello world');

// buttons
const btnDigit = document.querySelectorAll('.digit')
const btnOperator = document.querySelectorAll('.operator')
const btnDel = document.querySelector('.delete')
const btnEqual = document.querySelector('.equal')
const btnDecimal = document.querySelector('.decimal')
const btnClear = document.querySelector('.clear')

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

btnClear.addEventListener('click',function(){
    clearAll()
})

btnEqual.addEventListener('click',function(){
    let tempRes = ''
    if (inputType == 'secondNumber'){
        perfOperator()
        prevResult = currentResult
        firstNumber.textContent = currentResult
        secondNumber.textContent = ''
        setOperator.textContent = ''
        tempSecondNum = []
        updateScreen()
        tempRes = prevResult
        if(firstNumber.textContent == 'NaN'){
            clearAll()
            topRow.textContent = 'MATH ERROR'
        }
    }
    tempFirstNum = []
    inputType = 'firstNumber'

    // console.log(`temp second == ${tempSecondNum.join('')}`);
    // console.log(`temp first == ${tempFirstNum.join('')}`);
    
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
    if (inputType == 'firstNumber'){
        tempFirstNum.pop()
        firstNumber.textContent = tempFirstNum.join('')
    }
    if (inputType == 'secondNumber' && tempSecondNum == ""){
        setOperator.textContent = ''
        if(setOperator.textContent == '' && tempSecondNum == ""){
            inputType = 'firstNumber'
        }
    }
    if (inputType == 'secondNumber'){
        tempSecondNum.pop()
        secondNumber.textContent = tempSecondNum.join('')
    }

    // console.log(`temp second == ${tempSecondNum.join('')}`);
    // console.log(`temp first == ${tempFirstNum.join('')}`);
    // console.log(inputType);

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

function clearAll(){
    tempFirstNum = []
    tempSecondNum = []
    currentResult = ''
    inputType = 'firstNumber'
    firstNumber.textContent = ''
    secondNumber.textContent = ''
    setOperator.textContent = ''
    topRow.textContent = ''
}

function updateScreen(){
    topRow.textContent = firstNumber.textContent
}
