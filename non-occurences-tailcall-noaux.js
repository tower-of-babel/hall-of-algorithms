function occurences(elt, A, n) {
    if(A.length === 0) {
        return n;
    } else {
        if (elt === A[0]) {
            return occurences(elt, A.slice(1), n+1);
        } else {
            return occurences(elt, A.slice(1), n);
        }
    }
}

function non_occurences(elt, A, n) {
    return A.length - occurences(elt, A, n);
}
