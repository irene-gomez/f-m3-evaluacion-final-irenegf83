import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import Spinner from '../Spinner';

const HomePage = props => {
    const { charactersList, onChangeInput, valueInput, loading, onChangeSelect } = props;

    return (
        <Fragment>
            <Header />
            <main>
                <Filters
                    onChangeInput={onChangeInput}
                    valueInput={valueInput}
                />
                <select name="alive" id="alive" onChange={onChangeSelect}>
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                </select>
                {loading ? (
                    <Spinner />
                ) : (
                    <CharacterList
                        charactersList={charactersList}
                        valueInput={valueInput}
                    />
                )}
            </main>
        </Fragment>
    );
};

HomePage.propTypes = {
    charactersList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeInput: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default HomePage;
