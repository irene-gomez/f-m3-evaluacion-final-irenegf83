import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import DetailCharacterPage from '../DetailCharacterPage';
import fetchHarryPotter from '../../services/fetchHarryPotter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            filter: '',
            isLoading: true,
            allHouses: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', ''],
            filtersChecks: [],
            filtersSelect: ''

        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetchHarryPotter()
            .then(data => {
                const newDada = data.map((item, index) => {
                    return {
                        ...item,
                        id: index + 1
                    };
                });

                this.setState({
                    characters: newDada,
                    isLoading: false
                });
            });
    }

    handleChangeCheck(e){
        const { value, checked } = e.currentTarget;

        this.setState(prevState => {
            return {
                filtersChecks: checked
                    ? prevState.filtersChecks.concat(value)
                    : prevState.filtersChecks.filter(item => item !== value)
            }
        });
    }

    handleChangeSelect(e) {
        const { value } = e.currentTarget
        console.log(value);
        this.setState({
            filtersSelect: value
        });
        
    }

    handleChangeInput(e) {
        const { value } = e.currentTarget;
        this.setState({
            filter: value.toLowerCase()
        });
    }

    getCharacter(id) {
        const { characters } = this.state;
        return characters.find(character => character.id === parseInt(id));
    }

    render() {
        const { characters, filter, isLoading, filtersChecks, allHouses, filtersSelect } = this.state;
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <HomePage
                            charactersList={characters
                                .filter(item => !filtersChecks.length || filtersChecks.includes(item.house))
                                .filter(item => !filtersSelect.length || item.house.includes(filtersSelect))
                                .filter(character => character.name.toLowerCase().includes(filter))
                            }
                            onChangeInput={this.handleChangeInput}
                            valueInput={filter}
                            loading={isLoading}
                            onCheckCheckbox={this.handleChangeCheck}
                            infoFiltersChecks={filtersChecks}
                            allHouses={allHouses}
                            onChangeSelect={this.handleChangeSelect}

                        />
                    )}
                />
                <Route
                    path="/detail-character/:id"
                    render={routerProps => (
                        <DetailCharacterPage
                            match={routerProps.match}
                            character={this.getCharacter(routerProps.match.params.id)}
                            loading={isLoading}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default App;
