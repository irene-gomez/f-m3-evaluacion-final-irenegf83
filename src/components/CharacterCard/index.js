import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    return (
        <div>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.house}</p>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
};

export default CharacterCard;
