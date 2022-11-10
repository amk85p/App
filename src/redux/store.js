import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// export const getFilteredCards = ({ cards, searchString }, columnId) =>
//   cards.filter(
//     (card) =>
//       card.columnId === columnId &&
//       card.title.toLowerCase().includes(searchString.toLowerCase())
//   );

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const uptadeSearchstring = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

//GET ALL COLLUMNS

export const getAllColumns = (state) => state.columns;

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);

// getAllLists
export const getAllLists = (state) => state.lists;

//GET LIST BY ID

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

// getColumnsByList ćw 3

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    //card

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid() }],
      };

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
