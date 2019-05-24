import React from 'react';

const CharacterCard = props => {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.house}</p>
        </div>
    );
}
 
export default CharacterCard;