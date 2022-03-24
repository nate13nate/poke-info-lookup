import React from 'react';

import versions from '../../constants/versions';

import './styles.css';

const PokeVerSelect = ({ currVer, setCurrVer }) => {
  const onChange = (e) => {
    setCurrVer(e.target.value);
  }

  return (
    <select className="verselect" value={currVer} onChange={onChange}>
      {versions.map(value => <option key={value.key} value={value.key}>{value.name}</option>)}
    </select>
  )
}

export default PokeVerSelect;
