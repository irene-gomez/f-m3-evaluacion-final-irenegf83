import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import Spinner from '../Spinner';

import './styles.scss';

const HomePage = props => {
    const { charactersList, onChangeInput, valueInput, loading } = props;

    return (
        <Fragment>
            <Header />
            <main className="main__container">
                <Filters
                    onChangeInput={onChangeInput}
                    valueInput={valueInput}
                />
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
