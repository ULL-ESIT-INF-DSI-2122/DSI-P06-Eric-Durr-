import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/ejercicio-1/combat.class'; // eslint-disable-line
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line
import { Marvel } from '../../src/ejercicio-1/marvel.class'; // eslint-disable-line

describe('Combat between two pokemons', () => {
  const charmander: Pokemon = new Pokemon(
    'charmander',
    'Charrrr!',
    'fire',
    { height: 5, weight: 5 },
    {
      hp: 20,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const unknownFirst: Pokemon = new Pokemon(
    'rat',
    '',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 40,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const pikachu: Pokemon = new Pokemon(
    'pikachu',
    'Pikaaa!',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 40,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const unknownSecond: Pokemon = new Pokemon(
    'salamander',
    '',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 40,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const combat: Combat = new Combat(pikachu, charmander);
  const combaTwo: Combat = new Combat(unknownFirst, unknownSecond);

  it('Created Combat should include the first fighter', () => {
    expect('firstFighter' in combat).to.be.true;
  });
  it('Created Combat should include the second fighter', () => {
    expect('secondFighter' in combat).to.be.true;
  });
  it('Created Combat should implement a PokemonPrint interface', () => {
    expect('print' in combat).to.be.true;
  });
  
  it('start method simulates the combat between pikachu and charmander, should return winer', () => {
    expect(combat.start()).to.be.eq(pikachu);
  });
  it('start method simulates the combat between two unknown pokemons, should return winer', () => {
    expect(combaTwo.start()).to.be.eq(unknownFirst);
  });

});

describe('Combat between two marvel characters', () => {
});

describe('Mixed combat', () => {
});
