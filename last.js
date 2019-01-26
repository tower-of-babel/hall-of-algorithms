function last(seq) {
    if (seq.slice(1).length === 0) {
	return seq;
    } else {
	return last(seq.slice(1));
    }
}
