const runCheckers = (url) => {
    console.log('Target: ' + url); // HACK: trace


    const CssValitador   = 'https://jigsaw.w3.org/css-validator/validator?uri=' + url;
    const Html5Valitador = 'https://html5.validator.nu/?doc=' + url;

    const arrLinks = [
        CssValitador,
        Html5Valitador,
    ];


    for (let i = 0; i < arrLinks.length; i++) {
        openNewTab(arrLinks[i]);
    }
}

const openNewTab = (url) => {
    window.open(url, '_blank');
}


export {
    runCheckers
}
