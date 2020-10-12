import React, { useState } from 'react';
import { runCheckers } from '../../actions/app.js';
import Options from '../options/Options.jsx';
import TextButton from '../buttons/TextButton.jsx';
import './Main.css';

const runApp = (url) => {
    runCheckers(url);
}

function Main()
{
    const [url, setUrl] = useState('https://www.ironwoods.es');

    return (
        <main>
            <section>
                <div className="form-group v-margin">
                    <label htmlFor="url"><h3>Type the website URL:</h3></label>
                    <input type="url"
                        id="url"
                        defaultValue={url}
                        onChange={ event => setUrl( event.target.value ) } />
                </div>
                <TextButton
                    text="Check site !"
                    onClick={() => runApp(url)}>
                </TextButton>

                <Options />
            </section>

            <section className="help-box top-5">
                <h4>Notice:</h4>

                <p>If you are using a pop-up blocker tool you only
                can use the first of the set validation tools.
                You need to turn off your blocker to allow the tool
                to run normally.</p>
            </section>

            <section className="help-box">
                <h4>This tool runs:</h4>

                <ul className="index">
                    <li><a href="https://html5.validator.nu"
                        target="_blank"
                        rel="external nofollow noreferrer noopener">
                        HTML5 Validator
                    </a></li>
                    <li><a href="https://jigsaw.w3.org/css-validator/"
                        target="_blank"
                        rel="external nofollow noreferrer noopener">
                        CSS Validator Service
                    </a></li>
                </ul>
                ... and others.
                One new tap / window will be open for each test.
            </section>
        </main>
    );
}

export default Main;
