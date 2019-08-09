// natural recursive
function occurences(elt, seq) {
    if(seq.length === 0) {
        return 0;
    } else {
        if (elt === seq[0]) {
            return 1 + occurences(elt, seq.slice(1));
        } else {
            return occurences(elt, seq.slice(1));
        }
    }
}
