function every(lst, f) {
    if (lst.length === 0) {
	return false;
    } else {
	if (f(lst[0]) === true) {
	    return every(lst.slice(1), f);
	} else {
	    return false;
	}
    }
}
