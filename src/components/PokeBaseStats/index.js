import React from 'react';

import './styles.css';

const PokeBaseStats = ({ currPoke, disappear }) => {
  if (!currPoke) return null;

  const stats = currPoke.stats;
  const opacity = disappear ? '0' : '1';

  return (
    <table className="stattable">
      <thead>
        <tr>
          <th className="statheader">Stat</th>
          <th className="statheader">Value</th>
          <th className="statheader">Bar</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(value => (
          <tr key={value.stat.name} className="statrow">
            <td>{value.stat.name.replace('-', ' ').toUpperCase()}</td>
            <td className="statvalue" style={{ opacity }}>{value.base_stat}</td>
            <td className="bartabledata">
              <div className="statbar" style={{ width: `${value.base_stat / 255 * 100}%` }}></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PokeBaseStats;
