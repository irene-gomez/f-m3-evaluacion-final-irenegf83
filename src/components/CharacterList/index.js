import React from 'react';
import { Link } from 'react-router-dom';

import CharacterCard from '../CharacterCard';

const CharacterList = props => {
    const { charactersList, valueInput } = props;
    
    return (
        <ul>
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

export default CharacterList;
