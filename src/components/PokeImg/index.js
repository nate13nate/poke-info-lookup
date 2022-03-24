import React from 'react';

import loadingGif from '../../images/loading.gif';
import errorImg from '../../images/Red X.png';

import './styles.css';

const PokeImg = ({ currPoke, isLoading, isError, isFirstSearch }) => {
  let sprite = null;
  let alt = 'nothing';

  if (isError) {
    sprite = errorImg;
    alt = 'error';
  } else if (isLoading) {
    sprite = loadingGif;
    alt = 'loading';
  } else if (currPoke) {
    sprite = currPoke.sprites.front_default;
    alt = currPoke.name;
  }

  const style = { transform: isFirstSearch ? 'translate(109%, 110%)' : 'translate(0)' };

  if (!sprite) return <div style={style} className="pokeimgsizing" />;

  return <img
    className="pokeimgsizing"
    style={style}
    src={sprite}
    alt={alt}
  />;
}

export default PokeImg;
