import React from 'react';
import HomePage from '../HomePage';

import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            filter: ''
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
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

    handleChangeInput(e) {
        const { value } = e.currentTarget;
        this.setState({
            filter: value
        });
        
    }

    render() {
        const {characters, filter } = this.state;
        return (
            <div className="App">
                <HomePage 
                    charactersList={characters}
                    onChangeInput={this.handleChangeInput}
                    valueInput={filter}
                />
            </div>
        );
    }
}

export default App;
