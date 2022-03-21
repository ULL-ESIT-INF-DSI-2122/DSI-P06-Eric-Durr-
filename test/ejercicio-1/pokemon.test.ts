import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line

describe('Pokemon info is stored in a class', () => {
  const dummy: Pokemon = new Pokemon(
    '',
    'fire',
    { height: 0, weight: 0 },
    {
      hp: 0,
      atk: 0,
      def: 0,
      spd: 0,
    },
  );

  const defaultPokemon: Pokemon = new Pokemon();

  it('Pokemon interface name should exist and be a string', () => {
    expect('name' in dummy).to.be.true;
    expect(typeof dummy.getName()).to.eq('string');
  });
  it('Pokemon interface measures should exist and be an object of weight and height', () => {
    expect('shape' in dummy).to.be.true;
    expect(typeof dummy.getShape()).to.eq('object');
    expect(typeof dummy.getShape()[0]).to.eq('number');
    expect(typeof dummy.getShape()[1]).to.eq('number');
  });
  it('Pokemon interface type should exist and be a PokemonType variable', () => {
    expect('type' in dummy).to.be.true;
    expect(typeof dummy.getType()).to.eq('string');
  });
  it('Pokemon interface stats should exist and be an objects of stats', () => {
    expect('stats' in dummy).to.be.true;
    expect(typeof dummy.getStats()).to.eq('object');
    expect(typeof dummy.getStats()[0]).to.eq('number');
    expect(typeof dummy.getStats()[1]).to.eq('number');
    expect(typeof dummy.getStats()[2]).to.eq('number');
    expect(typeof dummy.getStats()[3]).to.eq('number');
  });

  it('Default pokemon is as espected normal', () => {
    expect(defaultPokemon.getName()).to.be.eq('');
    expect(defaultPokemon.getShape()).to.be.eql([0, 0]);
    expect(defaultPokemon.getType()).to.be.eq('normal');
    expect(defaultPokemon.getStats()[0]).to.be.eq(0);
    expect(defaultPokemon.getStats()[1]).to.be.eq(0);
    expect(defaultPokemon.getStats()[2]).to.be.eq(0);
    expect(defaultPokemon.getStats()[3]).to.be.eq(0);
  });
});
