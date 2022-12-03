import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes, POKEMON_ERROR, POKEMON_START, POKEMON_SUCCESS } from "../actionTypes/pokemonActionTypes";

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_START
        })

        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ pokemon +'')
        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: POKEMON_ERROR
        })
    }
}