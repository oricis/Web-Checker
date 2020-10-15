const checkArray = (data) => {
    return (data !== null
        && typeof (data) === 'object'
        && Array.isArray(data));
}

const removeValue = (arr, value) => {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr;
}


export {
    checkArray,
    removeValue,
}
