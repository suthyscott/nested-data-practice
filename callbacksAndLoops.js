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

console.log(ryeSandwich)

console.log(ryeSandwich.sandwichBuilder(['lettuce', 'mustard', 'tomatoes']))