function occur(elt, A, n) {
    if(A.length === 0) {
        return n;
    } else {
        if (elt === A[0]) {
            return occur(elt, A.slice(1), n+1);
        } else {
            return occur(elt, A.slice(1), n);
        }
    }
}

function non_occur(elt, A, n) {
    return A.length - occur(elt, A, n);
}