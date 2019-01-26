function some(lst, f) {
    if (lst.length === 0) {
	return false;
    } else {
	if (f(lst[0]) === true) {
	    return true;
	} else {
	    return some(lst.slice(1), f);;
	}
    }
}
