// compress algorithm
// recursive
function compress(x) {
    if (Array.isArray(x)) {
	return compr(x[0], 1, x.slice(1));
    } else {
	return x;
    }
}

function compr(elt, n, lst) {
    if (lst.length === 0) {
	return [n_elts(elt, n)];
    } else {
	let next = lst[0];
	if (next == elt) {
	    return compr(elt, n+1, lst.slice(1));
	} else {
	    return [n_elts(elt, n), ...compr(next, 1, lst.slice(1))];
	    
	}
    }
}

function n_elts(elt, n) {
    if (n > 1) {
	return [n, elt];
    } else {
	return elt;
    }
}
// compress([1, 1, 1, 2, 2, 1, 1, 1, 3, 2]) => [[3,1],[2,2],[3,1],3,2]
