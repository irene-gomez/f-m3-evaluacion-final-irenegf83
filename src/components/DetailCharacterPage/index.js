import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Spinner from '../Spinner';

import './styles.scss';

const DetailCharacterPage = props => {
    const { character, loading } = props;

    return (
        <Fragment>
            <Header />
            {loading ? (
                <Spinner />
            ) : (
                <div className="wrapper-detail">
                    <div className="detail-character">
                        <img className="detail-character__image" src={character.image} alt={character.name} />
                        <div>
                            <h2 className="detail-character__name">{character.name}</h2>
                            <p className="detail-character__house"><span className="detail-character--bold">Casa:</span> {character.house ? character.house : 'Sin casa'}</p>
                            <p className="detail-character__birth"><span className="detail-character--bold">Nacimiento:</span> {character.yearOfBirth ? character.yearOfBirth : '-'}</p>
                            <p className="detail-character__patronus"><span className="detail-character--bold">Patronus:</span> {character.patronus ? character.patronus : '-'}</p>
                            <p className="detail-character__alive"><span className="detail-character--bold">Estado:</span> {character.alive ? 'Vivo' : '☠️'}</p>
                        </div>
                    </div>
                    <Link className="btn__home" to="/">Volver</Link>
                </div>
            )}
        </Fragment>
    );
};

DetailCharacterPage.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string,
    yearOfBirth: PropTypes.number,
    patronus: PropTypes.string,
    alive: PropTypes.string
};

export default DetailCharacterPage;
