import React, { useState } from 'react';
import './forms.css';


function Checkbox(props)
{
    const [checked, setChecked] = useState(props.checked);
    const handleChange = () => {
        setChecked(!checked);

        props.onChange(props.id, !checked);
    }
    return (
        <div>
            <input type="checkbox"
                id={props.id}
                checked={checked}
                defaultValue={props.value}
                onChange={handleChange} />
            <label htmlFor={props.id}>
                {props.text}
            </label>
        </div>
    );
}

export default Checkbox;
