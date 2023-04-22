// Add your code here
function generateRandom() {
    var rand_float = Math.random()
    console.log(rand_float)
    rand_float = (rand_float * 10) + 1
    rand_int = Math.floor(rand_float)
    console.log(rand_int)
    return rand_int
}

generateRandom()