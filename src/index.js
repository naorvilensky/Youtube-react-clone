import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIeUu4Ib5yGxTRBUMYI-mromjKAKFjTbo';

const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));