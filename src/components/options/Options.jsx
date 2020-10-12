import React, { useState } from 'react';
import Checkbox from '../forms/Checkbox.jsx';
import SmallButton from '../buttons/SmallButton.jsx';
import './Options.css';


const handleCheckOption = (id, checked) => {
    console.log(id, checked);
}

function Options()
{
    const [optionsGroupName, setOptionGroupSelected] = useState('basic');

    const selectAll = () => {
        console.log('selectAll');
        const groupName = 'all';
        setOptionGroupSelected(groupName);

        // TODO: select all the options
    }
    const selectBasic = () => {
        console.log('selectBasic');
        const groupName = 'basic';
        setOptionGroupSelected(groupName);

        // TODO: select options in the group
    }
    const selectNone = () => {
        console.log('selectNone');
        const groupName = 'none';
        setOptionGroupSelected(groupName);

        // TODO: deselect all the options
    }

    const getCssExtraClass = (expectedOption, actualButton) => {
        return (expectedOption === actualButton) ? 'activated' : '';
    }
    const cssClassNameForAll   = getCssExtraClass('all', optionsGroupName);
    const cssClassNameForBasic = getCssExtraClass('basic', optionsGroupName);
    const cssClassNameForNone  = getCssExtraClass('none', optionsGroupName);

    return (
        <section class="options">
            <h3>Options:</h3>

            <div className="option-buttons">
                <strong>Select:</strong>
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
                    checked={true}
                    defaultValue="css"
                    id="css"
                    text="CSS"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="facebook"
                    id="facebook"
                    text="Debug Facebook Metas"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="gtmetrix"
                    id="gtmetrix"
                    text="GtMextrix Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={true}
                    defaultValue="html5"
                    id="html5"
                    text="HTML5"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="js"
                    id="js"
                    text="JavaScript Validation"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={true}
                    defaultValue="links"
                    id="links"
                    text="Links"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="microdata"
                    id="microdata"
                    text="Microdata"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={true}
                    defaultValue="mobile-friendly"
                    id="mobile-friendly"
                    text="Mobile Friendly"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="mozilla"
                    id="mozilla"
                    text="Mozilla Observatory Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="page-speed"
                    id="page-speed"
                    text="PageSpeed Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="headers"
                    id="headers"
                    text="Security Headers"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
                    defaultValue="site-cost"
                    id="site-cost"
                    text="Site Cost Report"
                    onChange={(id, checked) => { handleCheckOption(id, checked) }}>
                </Checkbox>
                <Checkbox
                    checked={false}
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
