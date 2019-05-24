import React from 'react';
import HomePage from '../HomePage';

import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(response => response.json())
            .then(data => {
                const newDada = data.map((item, index) => {
                    return {
                        ...item,
                        id: index + 1
                    };
                });

                this.setState({
                    characters: newDada,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <HomePage charactersList={this.state.characters} />
            </div>
        );
    }
}

export default App;
