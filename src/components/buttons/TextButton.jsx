import React from 'react';
import './buttons.css';


function TextButton(props)
{
    const cssClasses = props.extraCss
        ? 'btn ' + props.extraCss
        : 'btn';

    return (
        <button className={cssClasses}
            onClick={props.onClick}>
            { props.text }
        </button>
    );
}

export default TextButton;
