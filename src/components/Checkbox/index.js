import React from 'react';

const Checkbox = props => {
    return (
        <form>
            <input
                onChange={props.onCheckCheckbox}
                type="checkbox"
                name="houses"
                id={props.house}
                value={props.house}
            />
            <label htmlFor={props.house}>{props.house}</label>
        </form>
    );
};

export default Checkbox;
