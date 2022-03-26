import { describe, it } from 'mocha';
import { expect } from 'chai';

import { MovieItem } from '../../src/ejercicio-2/movieItem.class';
import { SeriesItem } from '../../src/ejercicio-2/seriesItem.class';
import { DocumentaryItem } from '../../src/ejercicio-2/documentaryItem.class';
import { Series } from '../../src/ejercicio-2/series.class';
import { Movies } from '../../src/ejercicio-2/movies.class';
import { Documentaries } from '../../src/ejercicio-2/documentaries.class';

describe('Tests for streamable collections ', () => {
  describe('Series list properties:', () => {
    const mySeriesList = new Series();
    const peakyBlinders = new SeriesItem(
      'Peaky Blinders',
      '2013',
      60,
      ['crime', 'drama', 'dummy'],
      8.8,
      36,
    );

    const howIMetYourM = new SeriesItem(
      'How I Met Your Mother',
      '2005',
      22,
      ['comedy', 'romance', 'dummy'],
      8.4,
      208,
      '2014',
    );

    it('New series can be added to series list', () => {
      expect(mySeriesList.addItem(peakyBlinders)).to.be.true;
      expect(mySeriesList.addItem(howIMetYourM)).to.be.true;
    });

    it('List shouldnt admit duplicated series', () => {
      expect(mySeriesList.addItem(peakyBlinders)).to.be.false;
      expect(mySeriesList.addItem(howIMetYourM)).to.be.false;
    });

    it('list should return comprehend 2 items by now', () => {
      expect(mySeriesList.numberOfItems()).to.be.eql(2);
    });

    it('Total duration of the list should return 6736 minutes', () => {
      expect(mySeriesList.totalDuration()).to.be.eql((22 * 208) + (60 * 36));
    });

    it('Average raing of the list should return 8.6 points', () => {
      expect(mySeriesList.averageRating()).to.be.eql(8.6);
    });

    it('Items can be searched by name', () => {
      expect(mySeriesList.selectByName('Peaky Blinders')).to.be.eql(peakyBlinders);
    });

    it('Items can be searched by duration', () => {
      expect(mySeriesList.selectByDuration(60)).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByDuration(30)).to.be.eql(undefined);
    });

    it('Items can be searched by release date', () => {
      expect(mySeriesList.selectByRelease('2013')).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByRelease('2014')).to.be.eql(undefined);
    });

    it('Items can be searched by gendre', () => {
      expect(mySeriesList.selectByGendre('comedy')).to.be.eql(howIMetYourM);
      expect(mySeriesList.selectByGendre('romance')).to.be.eql(howIMetYourM);
      expect(mySeriesList.selectByGendre('crime')).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByGendre('dummy')).to.be.eql([peakyBlinders, howIMetYourM]);
    });

    it('Items can be searched by rating', () => {
      expect(mySeriesList.selectByRating(8.8)).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByRating(8.4)).to.be.eql(howIMetYourM);
      expect(mySeriesList.selectByRating(9)).to.be.eql(undefined);
    });

    it('Series by episodes can be searched', () => {
      expect(mySeriesList.selectByEpisodes(36)).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByEpisodes(4)).to.be.eql(undefined);
    });

    it('Series by min episodes can be searched', () => {
      expect(mySeriesList.selectByMinEpisodes(36)).to.be.eql([peakyBlinders, howIMetYourM]);
      expect(mySeriesList.selectByMinEpisodes(208)).to.be.eql(howIMetYourM);
      expect(mySeriesList.selectByMinEpisodes(400)).to.be.eql(undefined);
    });

    it('Series by max episodes can be searched', () => {
      expect(mySeriesList.selectByMaxEpisodes(208)).to.be.eql([peakyBlinders, howIMetYourM]);
      expect(mySeriesList.selectByMaxEpisodes(36)).to.be.eql(peakyBlinders);
      expect(mySeriesList.selectByMaxEpisodes(3)).to.be.eql(undefined);
    });
    it('On emision sereies can be searched', () => {
      expect(mySeriesList.selectOnEmision()).to.be.eql(peakyBlinders);
    });

    it('Ended sereies can be searched', () => {
      expect(mySeriesList.selectEnded()).to.be.eql(howIMetYourM);
    });

    it('Series can be removed from series list', () => {
      expect(mySeriesList.removeItem(peakyBlinders)).to.be.true;
      expect(mySeriesList.numberOfItems()).to.be.eq(1);
    });

    it('Non existing series cant be removed from series list', () => {
      expect(mySeriesList.removeItem(peakyBlinders)).to.be.false;
      expect(mySeriesList.numberOfItems()).to.be.eq(1);
    });
  });

  describe('Movies list properties:', () => {
    const myMovies = new Movies();

    const godFather = new MovieItem(
      'The Godfather',
      '1972',
      175,
      ['crime', 'drama'],
      9.2,
    );

    const hpOne = new MovieItem(
      'Harry Potter and the Sorcerers Stone',
      '2001',
      152,
      ['adventure', 'fantasy', 'family'],
      7.6,
    );

    it('New series can be added to series list', () => {
      expect(myMovies.addItem(godFather)).to.be.true;
      expect(myMovies.addItem(hpOne)).to.be.true;
    });

    it('List shouldnt admit duplicated series', () => {
      expect(myMovies.addItem(godFather)).to.be.false;
      expect(myMovies.addItem(hpOne)).to.be.false;
    });

    it('list should return comprehend 2 items by now', () => {
      expect(myMovies.numberOfItems()).to.be.eql(2);
    });

    it('Total duration of the list should return 327 minutes', () => {
      expect(myMovies.totalDuration()).to.be.eql(175 + 152);
    });
  });
  describe('Documentaries list properties:', () => {
    const myDocus = new Documentaries();

    const cruise = new DocumentaryItem(
      'The Cruise',
      '1998',
      76,
      7.6,
    );
    const jupitersWife = new DocumentaryItem(
      'Jupiter\'s Wife',
      '1995',
      87,
      7.1,
    );

    it('New series can be added to series list', () => {
      expect(myDocus.addItem(cruise)).to.be.true;
      expect(myDocus.addItem(jupitersWife)).to.be.true;
    });

    it('List shouldnt admit duplicated series', () => {
      expect(myDocus.addItem(cruise)).to.be.false;
      expect(myDocus.addItem(jupitersWife)).to.be.false;
    });

    it('list should return comprehend 2 items by now', () => {
      expect(myDocus.numberOfItems()).to.be.eql(2);
    });

    it('Total duration of the list should return 163 minutes', () => {
      expect(myDocus.totalDuration()).to.be.eql(163);
    });
  });
});
