import { booksAPI } from '../../api/api';

const SET_BOOKS = 'SET_BOOKS';
const TOGGLE = 'TOGGLE';
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';

const initialState = {
  isLoading: false,
  books: [],
  totalItems: null,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };

    case TOGGLE:
      return { ...state, isLoading: action.payload };

    case SET_TOTAL_ITEMS:
      return { ...state, totalItems: action.payload };

    default:
      return state;
  }
};

const setBooks = (books) => ({
  type: SET_BOOKS, payload: { books },
});

const setTotalItems = (items) => ({
  type: SET_TOTAL_ITEMS, payload: { items },
});

const toggleLoading = (isLoading) => ({
  type: TOGGLE, payload: { isLoading },
});

export const getBooks = () => async (dispatch) => {
  toggleLoading(true);
  const data = await booksAPI.getBooksData();
  if (data.kind) {
    const books = data.items;
    const items = data.totalItems;
    dispatch(setBooks(books));
    dispatch(setTotalItems(items));
  }
  toggleLoading(false);
};

export default test;
