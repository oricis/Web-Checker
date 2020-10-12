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
        </main>
    );
}

export default Main;
