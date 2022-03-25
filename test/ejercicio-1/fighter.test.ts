import { describe, it } from 'mocha';
import { expect } from 'chai';

import { Pokemon } from '../../src/ejercicio-1/pokemon.class';
import { Marvel } from '../../src/ejercicio-1/marvel.class';
import { PokemonPrinter } from '../../src/ejercicio-1/pokemonPrinter.class';
import { MarvelPrinter } from '../../src/ejercicio-1/marvelPrinter.class';



describe('Pokemon Fighter universe class implementation', () => {
  const dummy = new Pokemon();
  const pikachu = new Pokemon(
    'pikachu',
    'Pikaaaaa!',
    'electric',
    { height: 40, weight: 6 },
    {
      hp: 35,
      atk: 55,
      def: 40,
      spd: 90,
    },
  );
  describe('Default pokemon fighter', () => {
    it('Should have no name', () => {
      expect(dummy.getName()).to.be.eq('');
    });
    it('Should have no shape', () => {
      expect(dummy.getShape('height')).to.be.eq(0);
      expect(dummy.getShape('weight')).to.be.eq(0);
    });
    it('Should have normal type', () => {
      expect(dummy.getType()).to.be.eq('normal');
    });
    it('Should have no stats are zero', () => {
      expect(dummy.getStat('hp')).to.be.eq(0);
      expect(dummy.getStat('atk')).to.be.eq(0);
      expect(dummy.getStat('def')).to.be.eq(0);
      expect(dummy.getStat('spd')).to.be.eq(0);
    });
  });
  describe('Pokemon can intercat by itself', () => {
    it('Pokemon effectiveness can know the effectiveness for every type', () => {
      expect(new Pokemon('', '', 'fire')
        .effectiveness(new Pokemon('', '', 'fire')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'fire')
        .effectiveness(new Pokemon('', '', 'leaf')))
        .to.be.eq(2);
      expect(new Pokemon('', '', 'fire')
        .effectiveness(new Pokemon('', '', 'water')))
        .to.be.eq(0.5);
      expect(new Pokemon('', '', 'fire')
        .effectiveness(new Pokemon('', '', 'electric')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'fire')
        .effectiveness(new Pokemon('', '', 'normal')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'water')
        .effectiveness(new Pokemon('', '', 'leaf')))
        .to.be.eq(0.5);
      expect(new Pokemon('', '', 'water')
        .effectiveness(new Pokemon('', '', 'electric')))
        .to.be.eq(0.5);
      expect(new Pokemon('', '', 'water')
        .effectiveness(new Pokemon('', '', 'fire')))
        .to.be.eq(2);
      expect(new Pokemon('', '', 'water')
        .effectiveness(new Pokemon('', '', 'normal')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'leaf')
        .effectiveness(new Pokemon('', '', 'water')))
        .to.be.eq(2);
      expect(new Pokemon('', '', 'leaf')
        .effectiveness(new Pokemon('', '', 'electric')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'leaf')
        .effectiveness(new Pokemon('', '', 'fire')))
        .to.be.eq(0.5);
      expect(new Pokemon('', '', 'leaf')
        .effectiveness(new Pokemon('', '', 'normal')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'electric')
        .effectiveness(new Pokemon('', '', 'leaf')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'electric')
        .effectiveness(new Pokemon('', '', 'water')))
        .to.be.eq(2);
      expect(new Pokemon('', '', 'electric')
        .effectiveness(new Pokemon('', '', 'fire')))
        .to.be.eq(0.5);
      expect(new Pokemon('', '', 'electric')
        .effectiveness(new Pokemon('', '', 'normal')))
        .to.be.eq(1);
      expect(new Pokemon('', '', 'normal')
        .effectiveness(new Pokemon('', '', 'fire')))
        .to.be.eq(1);
    });
    it('Pokemon attack returns the damage applied', () => {
      expect(pikachu.attack(dummy)).to.be.eq(55);
      expect(dummy.attack(pikachu)).to.be.eq(0);
    });
    it('Pokemon HP can be setted to update damage', () => {
      dummy.setStat(100)('hp');
      dummy.setStat(dummy.getStat('hp') - pikachu.attack(dummy))('hp');
      expect(dummy.getStat('hp')).to.be.eq(45);
      expect(dummy.attack(pikachu)).to.be.eq(0);
    });
  });
  describe('Pokemon should be printed as expected', () => {
    new PokemonPrinter(dummy).print();
    new PokemonPrinter(pikachu).print();
  });
});

describe('Marvel Fighter universe class implementation', () => {
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
  describe('Default marvel fighter', () => {
    it('Should have no name', () => {
      expect(dummy.getName()).to.be.eq('');
    });
    it('Should have no shape', () => {
      expect(dummy.getShape('height')).to.be.eq(0);
      expect(dummy.getShape('weight')).to.be.eq(0);
    });
    it('Should have normal type', () => {
      expect(dummy.getType()).to.be.eq('classOne');
    });
    it('Should have no stats are zero', () => {
      expect(dummy.getStat('hp')).to.be.eq(0);
      expect(dummy.getStat('atk')).to.be.eq(0);
      expect(dummy.getStat('def')).to.be.eq(0);
      expect(dummy.getStat('spd')).to.be.eq(0);
    });
  });
  describe('Fight between dummy and piderman', () => {
    it('Marvel attack returns the damage applied', () => {
      expect(spiderman.attack(dummy)).to.be.eq(160);
      expect(dummy.attack(spiderman)).to.be.eq(0);
    });
    it('Marvel fighter HP can be setted to update damage', () => {
      dummy.setStat(100)('hp');
      dummy.setStat(dummy.getStat('hp') - spiderman.attack(dummy))('hp');
      expect(dummy.getStat('hp')).to.be.eq(-60);
      expect(dummy.attack(spiderman)).to.be.eq(0);
    });
  });
  describe('Pokemon should be printed as expected', () => {
    new MarvelPrinter(dummy).print();
    new MarvelPrinter(spiderman).print();
  });
});
