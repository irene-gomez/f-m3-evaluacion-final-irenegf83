import React, { Fragment } from 'react';
import Header from '../Header'
import Filters from '../Filters'
import CharacterList from '../CharacterList'

const HomePage = props => {
    const { charactersList, onChangeInput, valueInput } = props;

    return (
        <Fragment>
            <Header />
            <Filters 
                onChangeInput={onChangeInput}
                valueInput={valueInput}
            />
            <CharacterList 
                charactersList={charactersList}
                valueInput={valueInput}
            />
        </Fragment>
    );
}
 
export default HomePage;