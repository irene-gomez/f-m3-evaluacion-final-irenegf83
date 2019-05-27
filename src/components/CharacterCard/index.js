import React from 'react';
import PropTypes from 'prop-types';
import gryffindor_flag from '../../images/houses/gryffindor_flag.png';
import hufflepuff_flag from '../../images/houses/hufflepuff_flag.png';
import ravenclaw_flag from '../../images/houses/ravenclaw_flag.png';
import slytherin_flag from '../../images/houses/slytherin_flag.png';

import './styles.scss';

const flags = house => {
    if(house === 'Gryffindor') {
        return gryffindor_flag;
    } 
    if(house === 'Slytherin') {
        return slytherin_flag;
    }
    if(house === 'Hufflepuff') {
        return hufflepuff_flag;
    }
    if(house === 'Ravenclaw') {
        return ravenclaw_flag;
    } else {
        return '';
    }
}

const CharacterCard = props => {
    return (
        <div className="card">
            <img className="card__flag" src={flags(props.house)} alt={props.house} />
            <img className="card__image" src={props.image} alt={props.name} />
            <p className="card__name">{props.name}</p>
            <p className="card__house">
                {props.house ? props.house : 'Sin casa'}
            </p>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
};

export default CharacterCard;
