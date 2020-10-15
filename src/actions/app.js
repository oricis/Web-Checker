const runCheckers = (url) => {
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

    const arrLinks = [
        buttonContrast,
        cssValitador + url,
        facebookDebug + url,
        gtMextrix + url,
        html5Valitador + url,
        keywordsDensity + url,
        jsValidator + url,
        microdata + url,
        mobileFrindly + url,
        mozillaObservatory + getUri(url),
        openlinkprofiler + url,
        pageSpeed + url,
        securityHeaders + url,
        siteCost + url,
    ];

    for (let i = 0; i < arrLinks.length; i++) {
        openNewTab(arrLinks[i]);
    }
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
