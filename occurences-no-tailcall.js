// no tail call
function occur(elt, seq) {
    if(seq.length === 0) {
        return 0;
    } else {
        if (elt === seq[0]) {
            return 1 + occur(elt, seq.slice(1));
        } else {
            return occur(elt, seq.slice(1));
        }
    }
}