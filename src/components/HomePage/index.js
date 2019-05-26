import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
};

HomePage.propTypes = {
    charactersList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeInput: PropTypes.func.isRequired,
};
 
export default HomePage;