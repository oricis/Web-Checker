import React, { useState } from 'react';
import './forms.css';


function Checkbox(props)
{
    const [checkedStatus, setChecked] = useState(props.checked);
    const handleChange = () => {
        setChecked(!checkedStatus);

        props.onChange(props.id, !checkedStatus);
    }

    return (
        <div>
            <input type="checkbox"
                id={props.id}
                checked={checkedStatus}
                defaultValue={props.value}
                onChange={handleChange} />

            <label htmlFor={props.id}>
                {props.text}
            </label>
        </div>
    );
}

export default Checkbox;
