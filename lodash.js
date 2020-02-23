
let list = [1, 2 ,3 ,4 ,5 ]
function shuffleList(){
    const shuffeldlist = _.shuffle(list)
    const output=  document.getElementById('output')
    output.innerHTML= shuffeldlist
}

function randommNumber(){
    let randomNumber = _.random(1, 100)
    const output = document.getElementById('randomNumber')
    output.innerHTML= randomNumber
}

