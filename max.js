function max(arr) {
    if (arr.length === 0) return [];
    else {
        if (arr.slice(1).length === 0) return arr[0];
	else if (arr[0] > arr.slice(1)[0]) return max([arr[0], ...arr.slice(2)]);
	else return max(arr.slice(1));
    }
}
