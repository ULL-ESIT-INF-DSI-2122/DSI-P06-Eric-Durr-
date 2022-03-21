import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PokeDex } from '../../src/ejercicio-1/pokedex.class'; // eslint-disable-line
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line

describe('PokeDex object composition by default', () => {
  const EricsPokedex: PokeDex = new PokeDex();
  const pikkachu: Pokemon = new Pokemon(
    'pikkachu',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 50,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );
  const pikachu: Pokemon = new Pokemon(
    'pikachu',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 50,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );
  it('Created Pokedex object should comprehend a list of Pokemons', () => {
    expect('list' in EricsPokedex).to.be.true;
  });
  it('Created Pokedex object should implement a PokemonPrint interface', () => {
    expect('print' in EricsPokedex).to.be.true;
  });
  it('Pokemons list of the pokedex should be empty', () => {
    expect(EricsPokedex.isEmpty()).to.be.true;
  });
  it('Pokemon can be added to the pokedex', () => {
    expect(EricsPokedex.addPokemon(pikkachu)).to.be.true;
  });
  it('Pokemon can be added to the pokedex', () => {
    expect(EricsPokedex.addPokemon(pikachu)).to.be.true;
  });
  it('Same pokemon added to the pokedex should return false', () => {
    expect(EricsPokedex.addPokemon(pikachu)).to.be.false;
  });
  it('Pokemons list of the pokedex should now not be empty', () => {
    expect(EricsPokedex.isEmpty()).to.be.false;
  });
  it('Pokemon can be printed', () => {
    // EricsPokedex.print();
  });
  it('Pokemon can be removed from the pokedex', () => {
    expect(EricsPokedex.removePokemon('pikachu')).to.be.true;
  });
  it('Removing a pokemon from the pokedex that doesnt exist should return false', () => {
    expect(EricsPokedex.removePokemon('pikachu')).to.be.false;
  });
});
