
const conv = {'0':'۰','1':'۱','2':'۲','3':'۳','4':'۴','5':'۵','6':'۶','7':'۷','8':'۸','9':'۹'}

export const convertNumber = (number) => {
    number = number.toString();
    let farsiNumber = "";
    for(let i = 0; i < number.length ; ++i){
        farsiNumber += conv[number.charAt(i)];
    }
    return farsiNumber;
}