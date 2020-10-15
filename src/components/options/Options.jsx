import React, { useState } from 'react';
import Checkbox from '../forms/Checkbox.jsx';
import SmallButton from '../buttons/SmallButton.jsx';
import UUIDGeneratorBrowser from '../../helpers/generateID.js';
import Storage from '../../services/Storage.js';
import { arrAllOptions, arrBasicOptions } from '../../data/group-options.js';
import { checkArray, removeValue } from '../../helpers/arr.js';
import { storageKey } from '../../data/config.js';
import { ucfirst } from '../../helpers/str.js';
import './Options.css';




const INIT = {
    name: 'basic'
};
function Options()
{
    const storage = new Storage();
    const [options, setOptions] = useState(INIT);

    const handleOptionStatus = (value, checked) => {
        let selectedOptions = storage.get(storageKey);

        // In case of the storage key & array was deleted!
        if (! checkArray(selectedOptions)) {
            selectNone();
            return;
        }

        if (selectedOptions.includes(value) && checked === false) {
            selectedOptions = removeValue(selectedOptions, value);
            storage.set(storageKey, selectedOptions);
            return;
        }

        if (! selectedOptions.includes(value) && checked === true) {
            selectedOptions.push(value);
            storage.set(storageKey, selectedOptions);
        }
    }

    const selectAll = () => {
        storage.set(storageKey, arrAllOptions);
        setOptions({
            name: 'all',
        });
    }
    const selectBasic = () => {
        storage.set(storageKey, arrBasicOptions);
        setOptions(INIT);
    }
    const selectNone = () => {
        storage.set(storageKey, []);
        setOptions({
            name: 'none',
        });
    }

    const getCssExtraClass = (expectedOption, actualButton) => {
        return (expectedOption === actualButton) ? 'activated' : '';
    }
    const cssClassNameForAll   = getCssExtraClass('all', options.name);
    const cssClassNameForBasic = getCssExtraClass('basic', options.name);
    const cssClassNameForNone  = getCssExtraClass('none', options.name);

    const createCheckbox = (option) =>
    {
        return (
            <Checkbox
                key={UUIDGeneratorBrowser()}
                checked={false}
                defaultValue={option}
                text={ucfirst(option)}
                onChange={(value, checked) => { handleOptionStatus(value, checked) }}>
            </Checkbox>
        );
    }

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
                {arrAllOptions.map(createCheckbox)}
            </div>
        </section>
    );
}

export default Options;
