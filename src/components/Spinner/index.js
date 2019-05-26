import React from 'react';
import './styles.scss';

const Spinner = () => {
    return (
        <div className="container__spinner">
            <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default Spinner;
