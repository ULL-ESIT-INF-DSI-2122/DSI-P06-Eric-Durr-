import sinon from 'sinon';
import { describe, before, after} from 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line
import { Marvel } from '../../src/ejercicio-1/marvel.class';
import { PokeDex } from '../../src/ejercicio-1/pokedex.class'; // eslint-disable-line
import { PokedexPrinter } from '../../src/ejercicio-1/pokedexPrinter.class'; // eslint-disable-line



describe('PokeDex object composition by default', () => {
  const EricsPokedex: PokeDex = new PokeDex();
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
  const pikachu: Pokemon = new Pokemon(
    'pikachu',
    '',
    'electric',
    { height: 5, weight: 5 },
    {
      hp: 50,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );
  it('Created Pokedex object should comprehend a list of Fighters', () => {
    expect('list' in EricsPokedex).to.be.true;
  });
  it('Mixed list of the pokedex should be empty', () => {
    expect(EricsPokedex.isEmpty()).to.be.true;
  });
  it('Marvel character can be added to the pokedex', () => {
    expect(EricsPokedex.addFighter(spiderman)).to.be.true;
  });
  it('Pokemon can be added to the pokedex', () => {
    expect(EricsPokedex.addFighter(pikachu)).to.be.true;
  });
  it('Same pokemon added to the pokedex should return false', () => {
    expect(EricsPokedex.addFighter(pikachu)).to.be.false;
  });
  it('Fighter list of the pokedex should now not be empty', () => {
    expect(EricsPokedex.isEmpty()).to.be.false;
  });
  it('List can be printed', () => {
    new PokedexPrinter(EricsPokedex).print();
  });
  it('Pokemon can be removed from the pokedex', () => {
    expect(EricsPokedex.removeFighter('pikachu')).to.be.true;
  });
  it('Removing a pokemon from the pokedex that doesnt exist should return false', () => {
    expect(EricsPokedex.removeFighter('pikachu')).to.be.false;
    expect(EricsPokedex.getFighter('pikachu')).to.be.undefined;
  });
});
