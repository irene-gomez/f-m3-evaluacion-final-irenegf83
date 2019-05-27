import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

import './styles.scss';

const CharacterList = props => {
    const { charactersList, valueInput } = props;
    
    return (
        <ul className="container-list">
            {charactersList
                .filter(character => character.name.toLowerCase().includes(valueInput))
                .map(character => {
                    return (
                        <li key={character.id}>
                            <Link to={`/detail-character/${character.id}`}>
                                <CharacterCard
                                    image={character.image}
                                    name={character.name}
                                    house={character.house}
                                />
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

CharacterList.propTypes = {
    charactersList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;
