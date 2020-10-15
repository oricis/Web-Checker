import React, { useState } from 'react';
import Storage from '../../services/Storage.js';
import { storageKey } from '../../data/config.js';
import './forms.css';


function Checkbox(props)
{
    const storage = new Storage();
    const selectedOptions = storage.get(storageKey);

    const checked = (props.checked)
        ? props.checked
        : (selectedOptions.includes(props.defaultValue));

    const [checkedStatus, setChecked] = useState(checked);

    const handleChange = () => {
        setChecked(!checkedStatus);

        props.onChange(props.defaultValue, !checkedStatus);
    }

    return (
        <div>
            <input type="checkbox"
                id={props.defaultValue}
                checked={checkedStatus}
                defaultValue={props.defaultValue}
                onChange={handleChange} />

            <label htmlFor={props.id}>
                {props.text}
            </label>
        </div>
    );
}

export default Checkbox;
