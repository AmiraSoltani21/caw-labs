
function first(array, n) {
    if (!Array.isArray(array) || array.length === 0 || n <= 0) return [];
    if (n == null) return array[0];
    return array.slice(0, n);
}


function last(array, n) {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}


function concatenate(array, separator = '') {
    if (!Array.isArray(array)) return '';
    return array.join(separator);
}


function chunk(array, size) {
    if (!Array.isArray(array) || size <= 0) return [];
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, index + size));
        index += size;
    }
    return chunkedArr;
}

// Export functions for Jest
module.exports = { first, last, concatenate, chunk };
