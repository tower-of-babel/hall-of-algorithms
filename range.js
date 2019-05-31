var range = (m, n) => {
    if (m === n) {
	return [];
    } else {
	return [m, ...range(m+1, n)];
    }
};
