function reverse (l) {
    return reverse_aux(l, []);
}

function reverse_aux (l, acc) {
	if (l.length === 0) return acc;
	else {
	    return reverse_aux(l.slice(1), [l[0], ...acc])
	}
}
