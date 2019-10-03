let arr = [1, 1, 2, 2, 1, 1, 1];

const noTriples = (arr) => {
    for (let i = 1; i < arr.length + 1; i++) {
        let main = arr[i];
        let before = arr[i - 1];
        let next = arr[i + 1];
        if ((main === next) && (next === before)) {
            return false;
        }
    }
    return true;
}

noTriples(arr);