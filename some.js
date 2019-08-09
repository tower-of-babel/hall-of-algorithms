function some(lat, f) {
    if (lat.length === 0) {
	return false;
    } else {
	if (f(lat[0]) === true) {
	    return true;
	} else {
	    return some(lat.slice(1), f);
	}
    }
}
