const remove_first = (x, a) => {
    if (a.length === 0) {
	return [];
    } else {
	if (x == a[0]) {
	    return a.slice(1);
	} else {
	    return [a[0], ...remove_first(x, a.slice(1))];
	}
    }
}
