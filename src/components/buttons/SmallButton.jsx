import React from 'react';
import './buttons.css';


function SmallButton(props)
{
    const cssClasses = props.extraCss
        ? 'btn btn-small ' + props.extraCss
        : 'btn btn-small';

    return (
        <button className={cssClasses}
            onClick={props.onClick}>
            { props.text }
        </button>
    );
}

export default SmallButton;
