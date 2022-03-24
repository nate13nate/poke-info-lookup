import React, { useState } from 'react';
import axios from 'axios';

import PokemonSearch from '../../components/PokemonSearch';
import PokeVerSelect from '../../components/PokeVerSelect';
import PokeLearnset from '../../components/PokeLearnset';
import PokeBaseStats from '../../components/PokeBaseStats';
import PokeImg from '../../components/PokeImg';
import Section from '../../components/Section';

import useWindowDimensions from '../../utils/useWindowDimensions';

import background from '../../images/background.png';

import './styles.css';
// import CenterSection from '../../components/CenterSection';

const PokemonInfo = () => {
  const [currVer, setCurrVer] = useState('platinum');
  const [currPoke, setCurrPoke] = useState(null);

  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const [disappear, setDisappear] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPoke = (name) => {
    setIsLoading(true);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`)
      .then((res) => {
        setDisappear(true);

        if (isFirstSearch) {
          setCurrPoke(res.data);
          setIsFirstSearch(false);
          setDisappear(false);

          setTimeout(() => { setIsLoading(false); }, 2000);
          return;
        }

        setTimeout(() => {
          setCurrPoke(res.data);
          setIsLoading(false);
          setDisappear(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
        setTimeout(() => { setIsError(false); }, 5000);
      });
  }

  const { width, height } = useWindowDimensions();
  const contentSize = width > height ? { height: '100%' } : { width: '100%' };

  return (
    <div className="pokeinfo-page main-background" style={{
      backgroundImage: `url(${background})`,
    }}>
      <div className="pokeinfo-content" style={contentSize}>
        <Section className="pokechoose" style={{
          transform: isFirstSearch ? 'translate(40%, 70%)' : 'translate(0)',
        }}>
          <PokeImg currPoke={currPoke} isLoading={isLoading} isError={isError} isFirstSearch={isFirstSearch} />
          <div className="input-content" style={{ transform: isFirstSearch ? 'translate(-28%)' : 'translate(0)' }}>
            <PokeVerSelect currVer={currVer} setCurrVer={setCurrVer} />
            <PokemonSearch getPoke={getPoke} />
          </div>
        </Section>

        <Section className="pokelearnset" style={{ opacity: isFirstSearch ? '0' : '1' }}>
          <PokeLearnset currPoke={currPoke} currVer={currVer} disappear={disappear} />
        </Section>

        <Section className="pokestats" style={{ opacity: isFirstSearch ? '0' : '1' }}>
          <PokeBaseStats currPoke={currPoke} disappear={disappear} />
        </Section>
      </div>
    </div>
  );
}

export default PokemonInfo;
