const getUri = (url) => {
    if (url.indexOf('https://') === 0) {
        return url.substring(('https://').length, url.length);
    }

    if (url.indexOf('http://') === 0) {
        return url.substring(('http://').length, url.length);
    }

    return url;
}

const ucfirst = (str) => {
    if (typeof str !== 'string')
        return '';

    return str.charAt(0).toUpperCase() + str.slice(1)
}


export {
    getUri,
    ucfirst,
}
