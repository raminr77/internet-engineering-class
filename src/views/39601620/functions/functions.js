function intCommas(number) {
    return convertToFaDigit(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

function convertToFaDigit(number) {
	var b = '' + number;
	for (var c = 48; c <= 57; c++) {
		var d = String.fromCharCode(c);
		var e = String.fromCharCode(c + 1728);
		b = b.replace(new RegExp(d.toString(), "g"), e.toString())
	}
	return b;
}

export {
    intCommas, convertToFaDigit
}