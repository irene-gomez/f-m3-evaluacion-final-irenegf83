import React from 'react';
import CharacterCard from '../CharacterCard'


const CharacterList = props => {
    const { charactersList } = props;
    return (
        <ul>
        {charactersList.map(character => {
            return (
                <li>
                    <CharacterCard 
                        image={character.image}
                        name={character.name}
                        house={character.house}
                    />
                </li>
            );
        })}
        </ul>
    );
}
 
export default CharacterList;