import React from 'react';
import { Link } from 'react-router-dom';

const DetailCharacterPage = props => {
    const { charactersList, match } = props;

    return (
        <div>
            {charactersList.map(character => 
                match.params.id === character.id
                    ? <p>DetailCharacterPage</p>
                    : <p>meeec</p>
                )
            }
            <Link to="/">Volver</Link>
        </div>
    );
};

export default DetailCharacterPage;
