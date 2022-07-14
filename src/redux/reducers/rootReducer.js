import card1 from '../../../public/img/card1.png'
import card2 from '../../../public/img/card2.png'
import card3 from '../../../public/img/card3.png'
import card4 from '../../../public/img/card4.png'
import card5 from '../../../public/img/card5.png'
import card6 from '../../../public/img/card6.png'
import {
  GET_MOVIES,
  GET_SELECTED_MOVIE,
  GET_SELECTED_MOVIE_NULL,
} from '../actions/actionTypes'

const initialState = {
  movies: [
    {
      id: 1,
      src: card1,
      name: 'Pulp Fiction',
      type: 'Action & Adventure',
      year: '2004',
      duration: '2h 34min',
      rating: '4.3',
      text: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
    },
    {
      id: 2,
      src: card2,
      name: 'Bohemian Rhapsody',
      type: 'Drama, Biography, Music',
      year: '2003',
      duration: '2h 08min',
      rating: '4.1',
      text: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; itis based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    },
    {
      id: 3,
      src: card3,
      name: 'Kill Bill: Vol 2',
      type: 'Oscar winning Movie',
      year: '1994',
      duration: '2h 07min',
      rating: '4.5',
      text: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
    },
    {
      id: 4,
      src: card4,
      name: 'Avengers: War of Infinity',
      type: 'Action & Adventure',
      year: '2004',
      duration: '2h 19min',
      rating: '4.9',
      text: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; itis based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    },
    {
      id: 5,
      src: card5,
      name: 'Inception',
      type: 'Action & Adventure',
      year: '2003',
      duration: '2h 13min',
      rating: '4.4',
      text: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
    },
    {
      id: 6,
      src: card6,
      name: 'Reservoir dogs',
      type: 'Oscar winning Movie',
      year: '1994',
      duration: '2h 28min',
      rating: '4.8',
      text: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; itis based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    },
  ],
  selectedMovie: null,
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return state.movies
    case GET_SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload }
    case GET_SELECTED_MOVIE_NULL:
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}
