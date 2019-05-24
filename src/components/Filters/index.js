import React from 'react';

const Filters = props => {
    return (
        <div>
            <label htmlFor="search-character"></label>
            <input 
                type="text"
                id="search-character"
                value={props.valueInput}
                onChange={props.onChangeInput}
            />
        </div>
    );
}
 
export default Filters;