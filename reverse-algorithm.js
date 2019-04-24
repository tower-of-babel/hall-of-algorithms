const rev = function(arr) {
    if (arr.length === 0) {
	return []; // better than return arr;
    } else {
	return [...rev(arr.slice(1)) , arr[0]];
    }
}

// seq: string or array
const rev1 = function(seq) {
    if (seq.length === 0) {
	return seq; //for seq can be "" or [] 
    } else {
	return rev1(seq.slice(1)).concat(seq[0]);
    }
}
