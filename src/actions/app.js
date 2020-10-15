const runCheckers = (url, storedOptions) => {
    console.log('Target: ' + url, getUri(url)); // HACK: trace

    const buttonContrast = 'https://www.aditus.io/button-contrast-checker/';
    const cssValitador   = 'https://jigsaw.w3.org/css-validator/validator?uri=';
    const facebookDebug  = 'https://developers.facebook.com/tools/debug/?q=';
    const gtMextrix      = 'https://gtmetrix.com/?url=';
    const html5Valitador = 'https://html5.validator.nu/?doc=';
    const keywordsDensity = 'http://www.wmtips.com/tools/keyword-density-analyzer/?&url=';
    const jsValidator = 'https://codebeautify.org/jsvalidate/?url=';
    const microdata = 'https://search.google.com/test/rich-results?url=';
    const mobileFrindly = 'https://search.google.com/test/mobile-friendly?url=';
    const mozillaObservatory = 'https://observatory.mozilla.org/analyze/';
    const openlinkprofiler = 'https://openlinkprofiler.org/?url=';
    const pageSpeed = 'http://developers.google.com/speed/pagespeed/insights/?url=';
    const securityHeaders = 'https://securityheaders.com/?q=';
    const siteCost = 'https://whatdoesmysitecost.com/?siteURL=';



    const allOptions = {
        'button-contrast' : buttonContrast,
        'css'             : cssValitador    + url,
        'facebook'        : facebookDebug   + url,
        'gtmetrix'        : gtMextrix       + url,
        'headers'         : securityHeaders + url,
        'html5'           : html5Valitador  + url,
        'js'              : jsValidator     + url,
        'keywords-density': keywordsDensity + url,
        'links'           : openlinkprofiler + url,
        'microdata'       : microdata       + url,
        'mobile-friendly' : mobileFrindly   + url,
        'mozilla'         : mozillaObservatory + getUri(url),
        'page-speed'      : pageSpeed       + url,
        'site-cost'       : siteCost        + url,
    };

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

const getUri = (url) => {
    if (url.indexOf('https://') === 0) {
        return url.substring(('https://').length, url.length);
    }

    if (url.indexOf('http://') === 0) {
        return url.substring(('http://').length, url.length);
    }

    return url;
}


const openNewTab = (url) => {
    window.open(url, '_blank');
}


export {
    runCheckers
}
