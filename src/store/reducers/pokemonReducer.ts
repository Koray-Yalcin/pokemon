import { PokemonDispatchTypes, PokemonType, POKEMON_ERROR, POKEMON_START, POKEMON_SUCCESS } from "../actionTypes/pokemonActionTypes";

interface DefaultStateI {
    start: boolean,
    pokemon?: PokemonType
}
const defaultState: DefaultStateI = {
    start: false
};

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case POKEMON_START:
            return {...state, start: true}
        case POKEMON_SUCCESS:
            return {...state, start: true, pokemon: action.payload}
        case POKEMON_ERROR:
            return {...state, start: false}
        default:
           return state;
    }
}

export default pokemonReducer;