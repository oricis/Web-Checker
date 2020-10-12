import React, { useState } from 'react';
import Checkbox from '../forms/Checkbox.jsx';
import SmallButton from '../buttons/SmallButton.jsx';
import './Options.css';

const selectAll = () => {
    console.log('selectAll');
}
const selectBasic = () => {
    console.log('selectBasic');
}
const selectNone = () => {
    console.log('selectNone');
}
const handleCheckOption = (id, checked) => {
    console.log(id, checked);
}

function Options()
{
    const [url, setOption] = useState([]);

    return (
        <section class="options">
            <h3>Options:</h3>

            <div className="option-buttons">
                <strong>Select:</strong> <SmallButton text="All"
                    onClick={selectAll} />
                <SmallButton text="Basic"
                    onClick={selectBasic}
                    extraCss="activated" />
                <SmallButton text="None"
                    onClick={selectNone} />
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
