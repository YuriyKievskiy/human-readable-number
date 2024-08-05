module.exports = function toReadable (number) {
    let stringNumber = String(number);
    let stringArr = stringNumber.split("");
    stringArr.reverse();
    let result = "";
    let isTwenty = false;

    let stringNumberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let stringNumberTenArr = ["ten", "eleven", "twelve", "thirteen", 'fourteen', "fifteen", 'sixteen', 'seventeen', 'eighteen', "nineteen"];
    let stringNumberTyArr = [" ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    for(let i = stringArr.length -1; i >= 0; i--){
        if(stringArr.length == 1 && stringArr[i] == 0){
            result = "zero";
            break;
        }
        if(i == 2){
            result += stringNumberArr[stringArr[i]] + " hundred";
        }
        if(i == 1){
            if(stringArr[i] == 0){
                result += "";
            }
            else if(stringArr[i] == 1){
                isTwenty = true;
            }else{
                result += " " + stringNumberTyArr[stringArr[i]-1]
            }
        }
        if(i == 0){
            if(isTwenty){
                result += " " + stringNumberTenArr[stringArr[i]]
            }
            else if(stringArr[i] == 0){

            }
            else{
                result += " " + stringNumberArr[stringArr[i]]
            }
        }
    }

    return result.replace(/\s+/g, ' ').trim()
}
