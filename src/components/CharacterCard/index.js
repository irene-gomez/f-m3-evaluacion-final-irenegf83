import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CharacterCard = props => {
    return (
        <div className="card">
            <div className="card__image">
                <img  src={props.image} alt={props.name} />
            </div>
            <p className="card__name">{props.name}</p>
            <p className="card__house">{props.house ? props.house : 'Sin casa'}</p>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
};

export default CharacterCard;
