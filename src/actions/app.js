import getOptions from '../data/urls.js';

const runCheckers = (url, storedOptions) => {
    const allOptions = getOptions(url);

    const arrLinks = (allOptions.length === storedOptions.length)
        ? Object.values(allOptions)
        : Object.values(removeKeys(allOptions, storedOptions));

    for (let i = 0; i < arrLinks.length; i++) {
        openNewTab(arrLinks[i]);
    }
}

const removeKeys = (allKeys, arrToPreserve) => {
    const result = {};

    const objectKeys = Object.keys(allKeys);
    for (let i = 0; i < objectKeys.length; i++) {
        const objectKey = objectKeys[i];


        for (let j = 0; j < arrToPreserve.length; j++) {
            const optionName = arrToPreserve[j];
            if (objectKey === optionName) {
                result[objectKey] = allKeys[objectKey];
            }
        }
    }

    return result;
}

const openNewTab = (url) => {
    window.open(url, '_blank');
}


export {
    runCheckers
}
