import React from 'react';
import HomePage from '../HomePage'
import Filters from '../Filters'
import CharacterList from '../CharacterList'

import './styles.scss';

function App() {
    return (
        <div className="App">
            <HomePage />
            <Filters />
            <CharacterList />

        </div>
    );
}

export default App;
