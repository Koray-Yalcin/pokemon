export const POKEMON_START = 'POKEMON_START';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_ERROR = 'POKEMON_ERROR';

export type PokemonType = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[]
}

export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonSprites = {
    front_default: string,
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}
export interface pokemonStart {
    type: typeof POKEMON_START
}

export interface pokemonError {
    type: typeof POKEMON_ERROR
}

export interface pokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: PokemonType
}

export type PokemonDispatchTypes = pokemonStart | pokemonSuccess | pokemonError;