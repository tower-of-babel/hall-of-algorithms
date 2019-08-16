function remove (x, lat) {
    if (lat.length === 0) {
	return [];
    } else {
	if (lat[0] === x) { // TODO: should be == or ===
	    return lat.slice(1);
	} else {
	    return [lat[0], ...remove(x, lat.slice(1))];
	}
    }
}
