import React from 'react';
import { Link } from 'react-router-dom';

const DetailCharacterPage = props => {
    const { character } = props;
    
    return (
        <div>
            <div>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>Casa: {character.house}</p>
                <p>Nacimiento: {character.yearOfBirth}</p>
                <p>Patronus: {character.patronus}</p>
                <p>Estado: {character.alive ? 'Vivo' : '☠️'}</p>
            </div>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default DetailCharacterPage;
