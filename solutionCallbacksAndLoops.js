function sandwichTemplate(bread, meat, cheese){
    return {
        bread, 
        meat,
        cheese,
        sandwichBuilder: function(toppings){
            let toppingsStr = ''
            for(let i = 0; i < toppings.length; i++){
                toppingsStr += toppings[i] + ', '
                
            }
            return `This sandwich has ${bread} bread, with ${meat} and ${cheese} cheese. In addition, the sandwich has the following toppings: ${toppingsStr}`
        }
    }
}

const ryeSandwich = sandwichTemplate('rye', 'roast beef', 'provolone')

// console.log(ryeSandwich)

// console.log(ryeSandwich.sandwichBuilder(['lettuce', 'mustard', 'tomatoes']))


const numArr = [4,56, 7, 23]

function adder(num1, num2){
    return num1 + num2
}

function multiplier(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function subtract(num1, num2){
    return num1 - num2
}

function mather(cb, arr, num){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(cb(arr[i], num))
    }

    return result
}

// console.log(mather(divide, numArr, 2))
// console.log(mather(adder, numArr, 2))


function camelCaser(word){
    word = word.split('')
    word[0] = word[0].toUpperCase()
    console.log(word)
    return word.join('')
}

function kebaber(word){
    return word + '-'
}

function snaker(word){
    return word + '_'
}


function caseHandler(caseFunction, str){
    let strArr = str.split(' ')
    let res = []
    for(let i = 0; i < strArr.length; i++){
        res.push(caseFunction(strArr[i]))
    }

    return res.join('')
}

console.log(caseHandler(snaker, 'This is a test string'))