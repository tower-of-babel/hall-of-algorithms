function reverse (arr) {
    if (arr.length === 0) {
	return []; // better than return arr;
    } else {
	return [...reverse(arr.slice(1)), arr[0]];
    }
}

// seq: string or array
function reverse (seq) {
    if (seq.length === 0) {
	return seq; //for seq can be "" or [] 
    } else {
	return reverse(seq.slice(1)).concat(seq[0]);
    }
}
