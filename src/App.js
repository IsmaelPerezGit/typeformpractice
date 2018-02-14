import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>typeform</h1>
                <div class="typeform-widget" data-url="https://ismaelperez.typeform.com/to/H6Tum8" data-transparency="50" data-hide-headers=true data-hide-footer=true> </div>  <div > powered by <a href="https://admin.typeform.com/signup?utm_campaign=H6Tum8&utm_source=typeform.com-11764309-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" target="_blank">Typeform</a> </div>
            </div>
        );
    }
}

export default App;
