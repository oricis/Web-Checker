import React, { useState } from 'react';
import Checkbox from '../forms/Checkbox.jsx';
import SmallButton from '../buttons/SmallButton.jsx';
import UUIDGeneratorBrowser from '../../helpers/generateID.js';
import { ucfirst } from '../../helpers/str.js';
import { arrAllOptions, arrBasicOptions } from '../../data/group-options.js';
import './Options.css';


const handleCheckOption = (id, checked) => {
    console.log(id, checked);
}

const INIT = {
    name: 'basic',
    group: arrBasicOptions
};
function Options()
{
    const [options, setOptions] = useState(INIT);
    const selectAll = () => {
        //const newOptions = JSON.parse(JSON.stringify(arrAllOptions));
        setOptions({
            name: 'all',
            group: arrAllOptions
        });
    }
    const selectBasic = () => {
        setOptions(INIT);
    }
    const selectNone = () => {
        setOptions({
            name: 'none',
            group: []
        });
    }

    const getCssExtraClass = (expectedOption, actualButton) => {
        return (expectedOption === actualButton) ? 'activated' : '';
    }
    const cssClassNameForAll   = getCssExtraClass('all', options.name);
    const cssClassNameForBasic = getCssExtraClass('basic', options.name);
    const cssClassNameForNone  = getCssExtraClass('none', options.name);

    const selectCheckboxes = () => {
        const checkedOptions = JSON.parse(JSON.stringify(options.group));
        const selectedGroupName = options.name;

        // TODO:
    }

    // console.log(options.name, options.group.includes('css')); // HACK:
    const createCheckbox = (option) =>
    {
        return (
            <Checkbox
                key={UUIDGeneratorBrowser()}
                checked={false}
                defaultValue={option}
                text={ucfirst(option)}
                onChange={(value, checked) => { handleCheckOption(value, checked) }}>
            </Checkbox>
        );
    }

    return (
        <section className="options">
            <h3>Options:</h3>
            { console.log('Inside return: ' + options.group.includes('css')) }
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
                {arrAllOptions.map(createCheckbox)}
            </div>
        </section>
    );
}

export default Options;
