import React from 'react';
import { runCheckers } from '../../actions/app.js';
import './Main.css';

const runApp = () => {
    runCheckers();
}
function Main()
{
    return (
        <main>
            <div className="form-group v-margin">
                <label htmlFor="url">Introduce la página web:</label>
                <input type="url" id="url" defaultValue="https://www.ironwoods.es" />
            </div>

            <div className="button-group">
                <button onClick={runApp}>Run</button>
            </div>

            <div>https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwww.ironwoods.es&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=es

            https://html5.validator.nu/?doc=https%3A%2F%2Fwww.ironwoods.es%2Fblog%2Fherramientas%2Fextensiones-chrome&showsource=yes</div>

        </main>
    );
}

export default Main;
