import React, { Fragment } from 'react';
import Header from '../Header'
import Filters from '../Filters'
import CharacterList from '../CharacterList'

const HomePage = props => {
    const { charactersList } = props;

    return (
        <Fragment>
            <Header />
            <Filters />
            <CharacterList charactersList={charactersList}/>
        </Fragment>
    );
}
 
export default HomePage;