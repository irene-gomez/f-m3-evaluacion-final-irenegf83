import React from 'react';

const Filters = props => {
    return (
        <div>
            <label htmlFor="search-character"></label>
            <input 
                type="text"
                id="search-character"
                value=""
                onChange={e => console.log(e)}
            />
        </div>
    );
}
 
export default Filters;