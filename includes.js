function includes(lst, elt) {
    if (lst.length === 0) return false;
    else {
	if (lst[0] === elt) return true;
	else return includes(lst.slice(1), elt);
    }
}
// TODO: add deep checking like
// includes([2, 3, [1], 4], [1]) is false, can be true. may accept equality func as an argument
