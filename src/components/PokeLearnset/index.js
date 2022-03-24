import React from 'react';

import Move from '../../objects/Move';

import './styles.css';

const PokeLearnset = ({ currPoke, currVer, disappear }) => {
  if (!currPoke) return null;

  const unsortedLearnset = currPoke.moves.reduce((moves, move) => {
    const versionInfo = move.version_group_details.find(value => value.version_group.name === currVer);

    if (!versionInfo || versionInfo.level_learned_at < 1) return moves;

    const name = move.move.name.split('-').reduce(
      (prevValue, value) => `${prevValue} ${value[0].toUpperCase() + value.substring(1)}`, ''
    );

    moves.push(new Move(move.move.name, name, versionInfo.level_learned_at));
    return moves;
  }, []);

  const learnset = unsortedLearnset.sort((a, b) => a.learnLevel - b.learnLevel);

  if (!learnset || learnset.length <= 0) return <div style={{ opacity: disappear ? '0' : '1' }} />;

  return (
    <table className="learnsettable" style={{ opacity: disappear ? '0' : '1' }}>
      <thead>
        <tr>
          <th>Learn Lvl</th>
          <th className="learnsetrightcol">Move</th>
        </tr>
      </thead>
      <tbody>
        {learnset.map(value => (
          <tr key={value.key} className="learnsetrow">
            <td className="learnsetdata">{value.learnLevel}</td>
            <td className="learnsetdata">{value.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokeLearnset;