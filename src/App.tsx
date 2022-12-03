import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { rootStore } from './store/store';
import { useDispatch } from 'react-redux';
import { getPokemon } from './store/actions/pokemonActions';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: rootStore) => state.pokemon);
  const dispatch = useDispatch<any>();

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  }
  console.log('pokemon state: ', pokemonState)
  return (
    <div>
      <input type={'text'} onChange= {(event) => {setPokemonName(event.target.value)}}></input>
      <button onClick={() => {handleSubmit()}} >Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon?.sprites?.front_default}></img>
          {pokemonState.pokemon?.abilities?.map(ability => {
            return <p>{ability.ability.name.toUpperCase()}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
