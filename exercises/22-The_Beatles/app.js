function sing(){
    let string = ""
    for (let i = 0; i<12; i++){
        if (i == 4){
            string += "whisper words of wisdom, "
        }
        else if (i == 10){
            string += "there will be an answer, "
        }
        else {
            string += "let it be, "
        }
    }
    return string
}

//Your code above ^^^

console.log(sing());