import React from 'react';
import './styles.scss';

const Filters = props => {
    return (
        <div className="filter">
            <label htmlFor="search-character" className="filter__label">
                Busca tu personaje favorito
            </label>
            <input
                className="filter__input"
                type="text"
                id="search-character"
                value={props.valueInput}
                onChange={props.onChangeInput}
            />
        </div>
    );
};

export default Filters;
