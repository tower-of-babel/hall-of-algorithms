const multiremove = (x, a) => {
    if (a.length === 0) {
	return [];
    } else {
	if (x === a[0]) {
	    return multiremove(x, a.slice(1));
	} else {
	    return [a[0], ...multiremove(x, a.slice(1))];
	}
    }
}
