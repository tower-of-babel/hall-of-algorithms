const remove = (x, a) => {
    if (a.length === 0) {
	return [];
    } else {
	if (x == a[0]) {
	    return remove(x, a.slice(1));
	} else {
	    return [a[0], ...remove(x, a.slice(1))];
	}
    }
}
