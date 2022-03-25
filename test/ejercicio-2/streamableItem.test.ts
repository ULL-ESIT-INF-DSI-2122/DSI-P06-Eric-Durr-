import { describe, it } from 'mocha';
import { expect } from 'chai';

import { MovieItem } from '../../src/ejercicio-2/movieItem.class';
import { SeriesItem } from '../../src/ejercicio-2/seriesItem.class';
import { DocumentaryItem } from '../../src/ejercicio-2/documentaryItem.class';


describe('Tests for single streamableItems of all three kind (Series, Movies, Documentaries)', () => {

  describe('Series item properties:', () => {

    const peakyBlinders = new SeriesItem(
      'Peaky Blinders',
      '2013',
      60,
      ['crime', 'drama'],
      8.8,
      36,
    );

    const howIMetYourM = new SeriesItem(
      'How I Met Your Mother',
      '2005',
      22,
      ['comedy', 'romance'],
      8.4,
      208,
      '2014',
    );


    it('Series item name is readable', () => {
      expect(peakyBlinders.getName()).to.be.eq('Peaky Blinders');
      expect(howIMetYourM.getName()).to.be.eq('How I Met Your Mother');
    });
    it('Series item release year is readable', () => {
      expect(peakyBlinders.getRelease()).to.be.eq('2013');
      expect(howIMetYourM.getRelease()).to.be.eq('2005');
    });
    it('Series item on emision boolean is readable', () => {
      expect(peakyBlinders.onEmision()).to.be.true;
      expect(howIMetYourM.onEmision()).to.be.false;
    });
    it('Continued series should return false when reading end date', () => {
      expect(peakyBlinders.endDate()).to.be.false;
    });
    it('Uncontinued series should return end date', () => {
      expect(howIMetYourM.endDate()).to.be.eq('2014');
    });
    it('Series item episodes are readable', () => {
      expect(peakyBlinders.getEpisodes()).to.be.eq(36);
      expect(howIMetYourM.getEpisodes()).to.be.eq(208);
    });
    it('Series item average duration is readable', () => {
      expect(peakyBlinders.getDuration()).to.be.eq(60);
      expect(howIMetYourM.getDuration()).to.be.eq(22);
    });
    it('Series item gendres are readable', () => {
      expect(peakyBlinders.getGendres()).to.be.eql(['crime', 'drama']);
      expect(howIMetYourM.getGendres()).to.be.eql(['comedy', 'romance']);
    });
    it('Series rating is readable', () => {
      expect(peakyBlinders.getRating()).to.be.eq(8.8);
      expect(howIMetYourM.getRating()).to.be.eq(8.4);
    });
    it('Series can be turned to string', () => {
      expect(peakyBlinders.toString()).to.be.eq(
        'Peaky Blinders (on emision) | TV Series | 2013- | 60m/episode | 36 episodes\n' +
        '┌─────┐ ┌─────┐ \n' +
        '│crime│ │drama│ \n' +
        '└─────┘ └─────┘ \n' +
        '8.8/10\n'
      );
      expect(howIMetYourM.toString()).to.be.eq(
        'How I Met Your Mother (finished) | TV Series | 2005-2014 | 22m/episode | 208 episodes\n' +
        '┌──────┐ ┌───────┐ \n' +
        '│comedy│ │romance│ \n' +
        '└──────┘ └───────┘ \n' +
        '8.4/10\n'
      );
    });
  });

  describe('Movies item properties:', () => {

    const godFather = new MovieItem(
      'The Godfather',
      '1972',
      175,
      ['crime', 'drama'],
      9.2,
    );

    it('Movie item name is readable', () => {
      expect(godFather.getName()).to.be.eq('The Godfather');
    });
    it('Movie item release year is readable', () => {
      expect(godFather.getRelease()).to.be.eq('1972');
    });
    it('Movie item duration is readable', () => {
      expect(godFather.getDuration()).to.be.eq(175);
    });
    it('Movie item gendres are readable', () => {
      expect(godFather.getGendres()).to.be.eql(['crime', 'drama']);
    });
    it('Movie rating is readable', () => {
      expect(godFather.getRating()).to.be.eq(9.2);
    });
    it('Movie can be turned to string', () => {
      expect(godFather.toString()).to.be.eq(
        'The Godfather | Film | 1972 | 175m \n' +
        '┌─────┐ ┌─────┐ \n' +
        '│crime│ │drama│ \n' +
        '└─────┘ └─────┘ \n' +
        '9.2/10\n'
      );
    });
  });

  describe('Documentaries item properties:', () => {
    const cruise = new DocumentaryItem(
      'The Cruise',
      '1998',
      76,
      7.6,
    );
    it('Documentary item name is readable', () => {
      expect(cruise.getName()).to.be.eq('The Cruise');
    });
    it('Documentary item release year is readable', () => {
      expect(cruise.getRelease()).to.be.eq('1998');
    });
    it('Documentary item  duration is readable', () => {
      expect(cruise.getDuration()).to.be.eq(76);
    });
    it('Documentary rating is readable', () => {
      expect(cruise.getRating()).to.be.eq(7.6);
    });
    it('Documentary can be turned to string', () => {
      expect(cruise.toString()).to.be.eq(
        'The Cruise | Documentary | 1998 | 76m \n' +
        '┌───────────┐ \n' +
        '│documentary│ \n' +
        '└───────────┘ \n' +
        '7.6/10\n'
      );
    });
  });
});