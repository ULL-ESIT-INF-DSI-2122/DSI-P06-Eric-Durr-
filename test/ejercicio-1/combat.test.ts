import Sinon from 'sinon';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/ejercicio-1/combat.class';
import { Pokemon } from '../../src/ejercicio-1/pokemon.class';
import { Marvel } from '../../src/ejercicio-1/marvel.class';

Sinon.stub(console, 'log');

const charmander: Pokemon = new Pokemon(
  'charmander',
  'Charrrr!',
  'fire',
  { height: 5, weight: 5 },
  {
    hp: 40,
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
    hp: 10,
    atk: 5,
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
    hp: 100,
    atk: 10,
    def: 10,
    spd: 10,
  },
);

const dummy = new Marvel();
const spiderman = new Marvel(
  'spiderman',
  'With great power, there must also come great responsibility',
  'class100',
  { height: 178, weight: 76 },
  {
    hp: 50,
    atk: 80,
    def: 30,
    spd: 25,
  },
);

const combat: Combat = new Combat(charmander, pikachu);
const combaTwo: Combat = new Combat(unknownFirst, unknownSecond);
const marvelCombat: Combat = new Combat(dummy, spiderman);
const mixedCombat: Combat = new Combat(dummy, pikachu);
describe('Combat class tests', () => {
  describe('Combat between two pokemons', () => {
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
      expect(combat.start()).to.be.eq(charmander);
    });
    it('start method simulates the combat between two unknown pokemons, should return winer', () => {
      expect(combaTwo.start()).to.be.eq(unknownSecond);
    });
  });

  describe('Combat between two marvel characters', () => {
    it('start method simulates the combat between pikachu and charmander, should return winer', () => {
      expect(marvelCombat.start()).to.be.eq(spiderman);
    });
  });

  describe('Mixed combat', () => {
    it('start method simulates the combat between pikachu and charmander, should return winer', () => {
      expect(mixedCombat.start()).to.be.eq(pikachu);
    });
  });
});
