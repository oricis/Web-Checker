import React, { useState } from 'react';
import Checkbox from '../forms/Checkbox.jsx';
import SmallButton from '../buttons/SmallButton.jsx';
import { arrAllOptions, arrBasicOptions } from '../../data/group-options.js';
import './Options.css';


const handleCheckOption = (id, checked) => {
    console.log(id, checked);
}

function Options()
{
    const [optionsGroupName, setOptionGroupSelected] = useState('basic');
    const [optionsSelected, setOptionsSelected] = useState(arrBasicOptions);
    console.log('options: ' + optionsGroupName); // HACK: trace

    const selectAll = () => {
        console.log('selectAll');
        const groupName = 'all';
        setOptionGroupSelected(groupName);
        setOptionsSelected(arrAllOptions);
    }
    const selectBasic = () => {
        console.log('selectBasic');
        const groupName = 'basic';
        setOptionGroupSelected(groupName);
        setOptionsSelected(arrBasicOptions);
    }
    const selectNone = () => {
        console.log('selectNone');
        const groupName = 'none';
        setOptionGroupSelected(groupName);
        setOptionsSelected([]);
    }

    const getCssExtraClass = (expectedOption, actualButton) => {
        return (expectedOption === actualButton) ? 'activated' : '';
    }
    const cssClassNameForAll   = getCssExtraClass('all', optionsGroupName);
    const cssClassNameForBasic = getCssExtraClass('basic', optionsGroupName);
    const cssClassNameForNone  = getCssExtraClass('none', optionsGroupName);

    return (
        <section className="options">
            <h3>Options:</h3>

            <div className="option-buttons">
                <strong>Select: </strong>
                <SmallButton text="All"
                    onClick={selectAll}
                    extraCss={cssClassNameForAll} />
                <SmallButton text="Basic"
                    onClick={selectBasic}
                    extraCss={cssClassNameForBasic} />
                <SmallButton text="None"
                    onClick={selectNone}
                    extraCss={cssClassNameForNone} />
            </div>

            <div className="checkboxes">
                <Checkbox
                    checked={optionsSelected.includes('css')}
                    defaultValue="css"
                    id="css"
                    text="CSS"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('facebook')}
                    defaultValue="facebook"
                    id="facebook"
                    text="Debug Facebook Metas"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('gtmetrix')}
                    defaultValue="gtmetrix"
                    id="gtmetrix"
                    text="GtMextrix Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('html5')}
                    defaultValue="html5"
                    id="html5"
                    text="HTML5"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('js')}
                    defaultValue="js"
                    id="js"
                    text="JavaScript Validation"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('links')}
                    defaultValue="links"
                    id="links"
                    text="Links"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('microdata')}
                    defaultValue="microdata"
                    id="microdata"
                    text="Microdata"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('mobile-friendly')}
                    defaultValue="mobile-friendly"
                    id="mobile-friendly"
                    text="Mobile Friendly"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('mozilla')}
                    defaultValue="mozilla"
                    id="mozilla"
                    text="Mozilla Observatory Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('page-speed')}
                    defaultValue="page-speed"
                    id="page-speed"
                    text="PageSpeed Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('headers')}
                    defaultValue="headers"
                    id="headers"
                    text="Security Headers"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('site-cost')}
                    defaultValue="site-cost"
                    id="site-cost"
                    text="Site Cost Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={optionsSelected.includes('keywords-density')}
                    defaultValue="keywords-density"
                    id="keywords-density"
                    text="SEO - Keywords density"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
            </div>
        </section>
    );
}

export default Options;
