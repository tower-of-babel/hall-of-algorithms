// tail call
function occur(elt, seq, n) {
    if(seq.length === 0) {
        return n;
    } else {
        if (elt === seq[0]) {
            return occur(elt, seq.slice(1), n+1);
        } else {
            return occur(elt, seq.slice(1), n);
        }
    }
}
