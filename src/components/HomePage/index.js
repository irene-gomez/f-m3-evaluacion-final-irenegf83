import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import Spinner from '../Spinner';

const HomePage = props => {
    const {
        charactersList,
        onChangeInput,
        valueInput,
        loading,
        infoFiltersChecks,
        onCheckCheckbox,
        allHouses
    } = props;

    return (
        <Fragment>
            <Header />
            <main>
                <Filters
                    onChangeInput={onChangeInput}
                    valueInput={valueInput}
                />
                <form>
                    {allHouses.map((item, index) => {
                        return (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    name="houses"
                                    id={item}
                                    value={item}
                                    onChange={onCheckCheckbox}
                                />
                                <label htmlFor={item}>{item ? item : 'Sin casa'}</label>
                            </div>
                        );
                    })}
                    <select name="houses" id="housesHarry" onChange={props.onChangeSelect}>
                        {allHouses.map((item, index) => {
                            return (
                                    <option 
                                        key={index}
                                        value={item}
                                        
                                    >
                                        {item}
                                    </option>
                            );
                        })}
                    </select>
                </form>
                {loading ? (
                    <Spinner />
                ) : (
                    <CharacterList
                        charactersList={charactersList}
                        valueInput={valueInput}
                        infoFiltersChecks={infoFiltersChecks}
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
