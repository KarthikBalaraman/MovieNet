import alt from '../alt';
//import MovieActions from '../actions/MovieActions';

class MovieStore {
  constructor() {
    //this.bindActions(MovieActions);
    this.movies = [
      {
        'Name': 'Mission: Impossible - Rogue Nation (2015)',
        'Description': 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
        'ImageLink':'img/mi5.jpg'
      },
      {
        'Name': 'Stonewall (2015)',
        'Description': 'A young man\'s political awakening and coming of age during the days and weeks leading up to the Stonewall Riots.',
        'ImageLink':'img/stonewall.jpg'
      }
    ];
  }
}

export default alt.createStore(MovieStore);