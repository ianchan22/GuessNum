
function guessNum() {

    const HighMsg = [
        "too High",
        "omg, too High",
        "too High, try harder",
        "Unbelieveble, try a lower number"];
    const LowMsg = [
        "too Low",
        "still too Low",
        "my god, too Low, try some more",
        "Unbelieveble, try a higher number"];

    let ramdomNum = Math.floor(Math.random() *11)
    alert(ramdomNum) // just to see the generated ramdom number
    let inputNum = prompt('Guess a number between 1 and 10 :')
    let msgCount = 0

    while (inputNum != ramdomNum && inputNum != 999) { // 999 -> back door EXIT
        if (inputNum < ramdomNum) {
            inputNum = prompt(LowMsg[msgCount]) }
        else {
            inputNum = prompt(HighMsg[msgCount]) }
        if (msgCount == 3) {
            msgCount = 0 }
        else {
            msgCount++ }
        }
    
    if (inputNum == ramdomNum) {
        alert("wow, you've nail it," + "\n" + "Good work") }
    else {
        alert("why you give up ?" + "\n" + "Good Bye")}
}
guessNum()