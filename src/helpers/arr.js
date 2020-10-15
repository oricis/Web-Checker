const checkArray = (data) => {
    return (data !== null
        && typeof (data) === 'object'
        && Array.isArray(data));
}

const removeValue = (arr, value) => {
    return (checkArray(arr))
        ? arr.filter(arrValue => arrValue !== value)
        : arr;
}


export {
    checkArray,
    removeValue,
}
