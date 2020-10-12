import React, { useState } from 'react';
import { runCheckers } from '../../actions/app.js';
import './Main.css';

const runApp = (url) => {
    runCheckers(url);
}

function Main()
{
    const [url, setUrl] = useState('https://www.ironwoods.es');

    return (
        <main>
            <div className="form-group v-margin">
                <label htmlFor="url">Type the website URL:</label>
                <input type="url"
                    id="url"
                    defaultValue={url}
                    onChange={ event => setUrl( event.target.value ) } />
            </div>

            <div className="button-group">
                <button onClick={ () => runApp(url) }>Run</button>
            </div>

            <div>https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwww.ironwoods.es&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=es

            https://html5.validator.nu/?doc=https%3A%2F%2Fwww.ironwoods.es%2Fblog%2Fherramientas%2Fextensiones-chrome&showsource=yes</div>

        </main>
    );
}

export default Main;
