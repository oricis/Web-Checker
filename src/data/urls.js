import { getUri } from '../helpers/str.js';

const buttonContrast = 'https://www.aditus.io/button-contrast-checker/';
const cssValitador = 'https://jigsaw.w3.org/css-validator/validator?uri=';
const facebookDebug = 'https://developers.facebook.com/tools/debug/?q=';
const gtMextrix = 'https://gtmetrix.com/?url=';
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

const getOptions = (url) => {

    const data = {
        'button-contrast': buttonContrast,
        'css': cssValitador + url,
        'facebook': facebookDebug + url,
        'gtmetrix': gtMextrix + url,
        'headers': securityHeaders + url,
        'html5': html5Valitador + url,
        'js': jsValidator + url,
        'keywords-density': keywordsDensity + url,
        'links': openlinkprofiler + url,
        'microdata': microdata + url,
        'mobile-friendly': mobileFrindly + url,
        'mozilla': mozillaObservatory + getUri(url),
        'page-speed': pageSpeed + url,
        'site-cost': siteCost + url,
    }

    return data;
};

export default getOptions;
