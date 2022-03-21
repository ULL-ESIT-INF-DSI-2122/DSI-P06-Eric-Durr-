import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/ejercicio-1/combat.class'; // eslint-disable-line
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line

describe('Combat between two pokemons', () => {
  const charmander: Pokemon = new Pokemon(
    'charmander',
    'fire',
    { height: 5, weight: 5 },
    {
      hp: 200,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const unknownFirst: Pokemon = new Pokemon(
    'rat',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 400,
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
      hp: 400,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const unknownSecond: Pokemon = new Pokemon(
    'salamander',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 400,
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

  it('Effectiveness between each type should work', () => {
    expect(combat
      .effectiveness(new Pokemon('', 'fire'), new Pokemon('', 'fire')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'fire'), new Pokemon('', 'leaf')))
      .to.be.eq(2);
    expect(combat
      .effectiveness(new Pokemon('', 'fire'), new Pokemon('', 'water')))
      .to.be.eq(0.5);
    expect(combat
      .effectiveness(new Pokemon('', 'fire'), new Pokemon('', 'electric')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'fire'), new Pokemon('', 'normal')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'water'), new Pokemon('', 'leaf')))
      .to.be.eq(0.5);
    expect(combat
      .effectiveness(new Pokemon('', 'water'), new Pokemon('', 'electric')))
      .to.be.eq(0.5);
    expect(combat
      .effectiveness(new Pokemon('', 'water'), new Pokemon('', 'fire')))
      .to.be.eq(2);
    expect(combat
      .effectiveness(new Pokemon('', 'water'), new Pokemon('', 'normal')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'leaf'), new Pokemon('', 'water')))
      .to.be.eq(2);
    expect(combat
      .effectiveness(new Pokemon('', 'leaf'), new Pokemon('', 'electric')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'leaf'), new Pokemon('', 'fire')))
      .to.be.eq(0.5);
    expect(combat
      .effectiveness(new Pokemon('', 'leaf'), new Pokemon('', 'normal')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'electric'), new Pokemon('', 'leaf')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'electric'), new Pokemon('', 'water')))
      .to.be.eq(2);
    expect(combat
      .effectiveness(new Pokemon('', 'electric'), new Pokemon('', 'fire')))
      .to.be.eq(0.5);
    expect(combat
      .effectiveness(new Pokemon('', 'electric'), new Pokemon('', 'normal')))
      .to.be.eq(1);
    expect(combat
      .effectiveness(new Pokemon('', 'normal'), new Pokemon('', 'fire')))
      .to.be.eq(1);
  });
  it('Attacking in the combat with first pokemon should change hp in the other', () => {
    expect(pikachu.getStats()[0]).to.be.eq(400);
    // combat.print();
    combat.attack(pikachu);
    // combat.print();
    expect(pikachu.getStats()[0]).to.be.eq(350);
  });

  it('Combat between unknown pokemon should work', () => {
    expect(unknownSecond.getStats()[0]).to.be.eq(400);
    // combaTwo.print();
    combaTwo.attack(unknownSecond);
    // combaTwo.print();
    expect(unknownSecond.getStats()[0]).to.be.eq(350);
  });

  it('start method simulates the combat between pikachu and charmander, should return winer', () => {
    // expect(combat.start()).to.be.eq(charmander);
  });
  it('start method simulates the combat between two unknown pokemons, should return winer', () => {
    // expect(combaTwo.start()).to.be.eq(unknownFirst);
  });
});
