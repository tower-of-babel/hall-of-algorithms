// !WRONG

const sort = function(arr) {
    if (arr.length === 0) {
	return [];
    } else {
	if (arr[0] <= Math.min(...arr.slice(1))) {
	    return [arr[0], ...sort(arr.slice(1))];
	} else {
	    return [...sort(arr.slice(1)), arr[0]];
	}
    }
}

/*
// in order to work with strings, too, a min function for strings necessary
// Math.min() does not work for strings
const sort1 = function(seq) {
	if (seq.length === 0) {
		return [];
	} else {
		if (seq[0] <= Math.min(...seq.slice(1))) {
		    return seq[0].concat(sort(seq.slice(1)));
		} else {
		    return sort(seq.slice(1)).concat(seq[0]);
		}
	}
}
*/

// Correct
function sort1 (lat) {
	if (lat.length === 0) return [];
	else {
		if (lat[0] === Math.max(...lat)) {
			return [lat[0], ...sort1(lat.slice(1))]
		} else {
			return sort1([...lat.slice(1), lat[0]])
        }
	}
}

function sort2 (lat) {
	if (lat.length === 0) return [];
	else {
		let max = Math.max(...lat)
		return [max, ...sort2(remove(max, lat))]
	}
}

function remove (elt, lat) {
	if (lat.length === 0) {
		return [];
	} else {
		if (lat[0] === elt) {
			return lat.slice(1)
		} else {
			return [lat[0], ...remove(elt, lat.slice(1))]
		}
	}
}
