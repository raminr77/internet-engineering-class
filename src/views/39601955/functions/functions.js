function intCommas(number){
    return convertToFaDigit(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

function convertToFaDigit(number){
    let b = '' + number;
    for(let c = 48; c<= 57 ;c++){
        let d = String.fromCharCode(c);
        let e = String.fromCharCode(c + 1728);
        b = b.replace(new RegExp(d.toString(), "g"), e.toString())
    }
    return b;
}

export{
    intCommas, convertToFaDigit
}
