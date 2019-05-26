import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

DetailCharacterPage.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string,
    yearOfBirth: PropTypes.number,
    patronus: PropTypes.string,
    alive: PropTypes.string,
};

export default DetailCharacterPage;
