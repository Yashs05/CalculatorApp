// Variables

let keys = document.getElementsByClassName('btns')
let numbers = document.getElementsByClassName('numbers')
let operators = document.getElementsByClassName('operators')

// Displaying the answer 
let answerScreen = document.getElementById('answerContainer')

// Saving the number entered to variable
let newNumber = "0"

// Saving the whole statement showing in on answer screen for calculation
let valueHolder = ""

let equalsBtn = document.getElementById('equalsBtn')
let deleteBtn = document.getElementById('deleteBtn')
let resetBtn = document.getElementById('resetBtn')
let themeChangeBtn = document.getElementById('themeNavigator')
let bodyBgColor = "hsl(222, 26%, 31%)"

// Code for theme changes
themeChangeBtn.addEventListener('click', function () {

    // Changing to 2nd theme
    if (bodyBgColor == "hsl(222, 26%, 31%)") {
        document.querySelector('body').style.backgroundColor = "hsl(0, 0%, 90%)"
        document.getElementById('container').style.backgroundColor = "hsl(0, 0%, 90%)"
        document.getElementById('answerContainer').style.backgroundColor = "hsl(0, 0%, 93%)"
        document.getElementById('answerContainer').style.color = "hsl(60, 10%, 19%)"
        document.getElementById('calculatorButtonsContainer').style.backgroundColor = "hsl(0, 5%, 81%)"
        document.getElementById('topContainer').style.color = "hsl(60, 10%, 19%)"
        document.getElementById('themeNavigator').style.backgroundColor = "hsl(0, 5%, 81%)"
        document.getElementById('themeNumber2').style.color = "hsl(25, 98%, 40%)"
        document.getElementById('themeNumber1').style.color = "hsl(60, 10%, 19%)"
        document.getElementById('themeNumber3').style.color = "hsl(60, 10%, 19%)"
        document.getElementById('themeNavigatorBtn').style.backgroundColor = "hsl(25, 98%, 40%)"
        document.getElementById('themeNavigatorBtn').style.transition = "0.2s left linear"
        document.getElementById('themeNavigatorBtn').style.left = "22px"

        for (const key of keys) {
            key.style.backgroundColor = "hsl(45, 7%, 89%)"
            key.style.color = "hsl(60, 10%, 19%)"
            key.style.boxShadow = "0px 3px hsl(35, 11%, 61%)"
        }

        equalsBtn.style.backgroundColor = "hsl(25, 98%, 40%)"
        equalsBtn.style.color = "white"
        equalsBtn.style.boxShadow = "0px 3px hsl(25, 99%, 27%)"

        deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)"
        deleteBtn.style.color = "white"
        deleteBtn.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"

        resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)"
        resetBtn.style.color = "white"
        resetBtn.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"

        bodyBgColor = "hsl(0, 0%, 90%)"

    }

    // Changing to 3rd theme
    else if (bodyBgColor == "hsl(0, 0%, 90%)") {
        document.querySelector('body').style.backgroundColor = "hsl(268, 75%, 9%)"
        document.getElementById('container').style.backgroundColor = "hsl(268, 75%, 9%)"
        document.getElementById('answerContainer').style.backgroundColor = "hsl(268, 71%, 12%)"
        document.getElementById('answerContainer').style.color = "hsl(52, 100%, 62%)"
        document.getElementById('calculatorButtonsContainer').style.backgroundColor = "hsl(268, 71%, 12%)"
        document.getElementById('topContainer').style.color = "hsl(52, 100%, 62%)"
        document.getElementById('themeNavigator').style.backgroundColor = "hsl(268, 71%, 12%)"
        document.getElementById('themeNumber3').style.color = "hsl(176, 100%, 44%)"
        document.getElementById('themeNumber2').style.color = "hsl(52, 100%, 62%)"
        document.getElementById('themeNumber1').style.color = "hsl(52, 100%, 62%)"
        document.getElementById('themeNavigatorBtn').style.backgroundColor = "hsl(176, 100%, 44%)"
        document.getElementById('themeNavigatorBtn').style.transition = "0.2s left linear"
        document.getElementById('themeNavigatorBtn').style.left = "43px"

        for (const key of keys) {
            key.style.backgroundColor = "hsl(268, 47%, 21%)"
            key.style.color = "hsl(52, 100%, 62%)"
            key.style.boxShadow = "0px 3px hsl(290, 70%, 36%)"
        }

        equalsBtn.style.backgroundColor = "hsl(176, 100%, 44%)"
        equalsBtn.style.color = "white"
        equalsBtn.style.boxShadow = "0px 3px hsl(177, 92%, 70%)"

        deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)"
        deleteBtn.style.color = "white"
        deleteBtn.style.boxShadow = "0px 3px hsl(285, 91%, 52%)"

        resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)"
        resetBtn.style.color = "white"
        resetBtn.style.boxShadow = "0px 3px hsl(285, 91%, 52%)"

        bodyBgColor = "hsl(268, 75%, 9%)"
    }

    // Changing to 1st theme
    else {
        document.querySelector('body').style.backgroundColor = "hsl(222, 26%, 31%)"
        document.getElementById('container').style.backgroundColor = "hsl(222, 26%, 31%)"
        document.getElementById('answerContainer').style.backgroundColor = "hsl(224, 36%, 15%)"
        document.getElementById('answerContainer').style.color = "white"
        document.getElementById('calculatorButtonsContainer').style.backgroundColor = "hsl(223, 31%, 20%)"
        document.getElementById('topContainer').style.color = "white"
        document.getElementById('themeNavigator').style.backgroundColor = "hsl(224, 36%, 15%)"
        document.getElementById('themeNumber1').style.color = "hsl(6, 63%, 50%)"
        document.getElementById('themeNumber3').style.color = "white"
        document.getElementById('themeNumber2').style.color = "white"
        document.getElementById('themeNavigatorBtn').style.backgroundColor = "hsl(6, 63%, 50%)"
        document.getElementById('themeNavigatorBtn').style.left = "4px"

        for (const key of keys) {
            key.style.backgroundColor = "hsl(30, 25%, 89%)"
            key.style.color = "hsl(221, 14%, 31%)"
            key.style.boxShadow = "0px 3px hsl(28deg 16% 65%)"
        }

        equalsBtn.style.backgroundColor = "hsl(6, 63%, 50%)"
        equalsBtn.style.color = "white"
        equalsBtn.style.boxShadow = "0px 3px hsl(6deg 70% 34%)"

        deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)"
        deleteBtn.style.color = "white"
        deleteBtn.style.boxShadow = "0px 3px hsl(224deg 28% 35%)"

        resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)"
        resetBtn.style.color = "white"
        resetBtn.style.boxShadow = "0px 3px hsl(224deg 28% 35%)"

        bodyBgColor = "hsl(222, 26%, 31%)"
    }
})


// Conditions for click on numbers
for (const number of numbers) {
    number.addEventListener('click', function () {

        // At the beginning, when answer screen shows 0, change it to number clicked
        if (newNumber == 0 && newNumber.includes(".") == false && valueHolder == "") {

            // If user clicks on ".", show "0."
            if (number.innerText == ".") {
                answerScreen.innerText = "0."
                newNumber = "."
            }
            else {
                answerScreen.innerText = number.innerText
                newNumber = number.innerText
            }
        }

        // After clicking on any operator, reset newNumber and repeat the same process as above for newNumber 
        else if (newNumber == 0 && newNumber.includes(".") == false && valueHolder != "") {

            // If user clicks on "."
            if (number.innerText == ".") {

                // and answer screen shows 0 after operator, make newNumber as "0."
                if (answerScreen.innerText.endsWith("0") == true) {
                    answerScreen.innerText += "."
                    newNumber = "."
                }

                // If answer screen has an operator after operator, add "0." to answer screen
                else if(answerScreen.innerText.endsWith("+") == true || answerScreen.innerText.endsWith("-") == true || answerScreen.innerText.endsWith("x") == true || answerScreen.innerText.endsWith("/") == true) {
                    answerScreen.innerText += "0."
                    newNumber = "."
                }

                else {
                    answerScreen.innerText += "."
                    valueHolder += "."
                    newNumber = "."
                }
            }

            // Make 0 to number clicked if newNumber is 0
            else if (answerScreen.innerText.endsWith("0") == true) {
                answerScreen.innerText = answerScreen.innerText.substr(0, answerScreen.innerText.length - 1) + number.innerText
                newNumber = number.innerText
            }

            else {
                answerScreen.innerText += number.innerText
                newNumber = number.innerText
            }
        }

        // Suffix the number clicked to answer screen number, when answer screen does not shows 0
        else if (newNumber != 0) {

            // If a number already includes a "." and user clicks on  ".", do nothing
            if (newNumber.includes(".") == true && number.innerText == ".") {

            }
            else {
                answerScreen.innerText += number.innerText
                newNumber += number.innerText
            }
        }

        // When answer screen shows "0."
        else {
            // If a number already includes a "." and user clicks on  ".", do nothing
            if (newNumber.includes(".") == true && number.innerText == ".") {

            }
            else {
                answerScreen.innerText += number.innerText
                newNumber += number.innerText
            }
        }
    })
}

// Condtions for click on operators
for (const operator of operators) {
    operator.addEventListener('click', function () {

        if (valueHolder.endsWith("+") == true || valueHolder.endsWith("-") == true || valueHolder.endsWith("x") == true || valueHolder.endsWith("/") == true) {
            valueHolder = valueHolder.substr(0, valueHolder.length-1) + operator.innerText
            answerScreen.innerText = valueHolder
        }

        else {
            answerScreen.innerText += operator.innerText
            valueHolder = answerScreen.innerText
            newNumber = "0"
        }
    })
}


// Conditions for deleteBtn
deleteBtn.addEventListener('click', function () {

    // If answer screen shows 0, do nothing
    if (newNumber == "0") {

    }

    // Revert the answer screen to "0", when it has non zero one digit in it
    else if (newNumber.length == 1 && valueHolder == "") {
        newNumber = "0"
        answerScreen.innerText = "0"
    }

    else if (newNumber.length == 1 && valueHolder != "") {
        newNumber = "0"
        answerScreen.innerText = answerScreen.innerText.substr(0, answerScreen.innerText.length - 1)
    }

    else if (newNumber.length > 1) {
        newNumber = newNumber.substr(0, newNumber.length - 1)
        answerScreen.innerText = answerScreen.innerText.substr(0, answerScreen.innerText.length - 1)
    }
})


// Conditions for resetBtn
// Reset everything on click
resetBtn.addEventListener('click', function () {
    answerScreen.innerText = "0"
    newNumber = "0"
    valueHolder = ""
})


// Conditions for equals btn
equalsBtn.addEventListener('click', function () {
    answerScreen.innerText = eval(valueHolder.replace(/x/g, "*") + newNumber)
    valueHolder = answerScreen.innerText
    newNumber = "0"
})