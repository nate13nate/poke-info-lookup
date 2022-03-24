import React, { useState } from 'react';

import './styles.css';

const PokemonSearch = ({ getPoke }) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    getPoke(input);
  };

  return (
    <form onSubmit={onSubmit} className="pokesearchform">
      <input className="pokesearchinput" type="text" placeholder="Pokemon name" value={input} onChange={onChange} />
      <input className="pokesearchsubmit" type="submit" />
    </form>
  );
}

export default PokemonSearch;
