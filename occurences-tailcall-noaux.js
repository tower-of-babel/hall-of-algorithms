// tail call no aux
function occurences(elt, seq, n) {
    if(seq.length === 0) {
        return n;
    } else {
        if (elt === seq[0]) {
            return occurences(elt, seq.slice(1), n+1);
        } else {
            return occurences(elt, seq.slice(1), n);
        }
    }
}
