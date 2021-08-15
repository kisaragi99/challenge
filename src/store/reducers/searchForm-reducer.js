import { booksAPI } from '../../api/api';

const SET_BOOKS = 'SET_BOOKS';
const TOGGLE_LOADING = 'TOGGLE';
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
const SET_MORE_BOOKS = 'SET_MORE_BOOKS';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const REFRESH_NEXT_PAGE = 'REFRESH_NEXT_PAGE';
const SET_QUERY_DATA = 'SET_QUERY_DATA';
const SET_BOOK = 'SET_BOOK';

const initialState = {
  isLoading: false,
  books: [],
  totalItems: null,
  nextPage: 2,
  queryData: {
    search: '',
    order: '',
    category: '',
  },
  currentBook: {
    name: '',
    image: '',
    category: '',
    authors: '',
    about: '',
  },
};

const searchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };

    case SET_MORE_BOOKS:
      return { ...state, books: [...state.books, ...action.payload] };

    case TOGGLE_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_TOTAL_ITEMS:
      return { ...state, totalItems: action.payload };

    case SET_NEXT_PAGE:
      return { ...state, nextPage: state.nextPage + 1 };

    case REFRESH_NEXT_PAGE:
      return { ...state, nextPage: 2 };

    case SET_QUERY_DATA:
      return { ...state, queryData: { ...action.payload } };

    case SET_BOOK:
      return {
        ...state,
        currentBook: {
          name: action.payload.name,
          image: action.payload.image,
          categories: action.payload.categories,
          authors: action.payload.authors,
          about: action.payload.about,
        },
      };

    default:
      return state;
  }
};

const setBooks = (payload) => ({
  type: SET_BOOKS, payload,
});

const setMoreBooks = (payload) => ({
  type: SET_MORE_BOOKS, payload,
});

const setTotalItems = (payload) => ({
  type: SET_TOTAL_ITEMS, payload,
});

const toggleLoading = (payload) => ({
  type: TOGGLE_LOADING, payload,
});

const setNextPage = () => ({
  type: SET_NEXT_PAGE,
});

const refreshNextPage = () => ({
  type: REFRESH_NEXT_PAGE,
});

const setQueryData = (payload) => ({
  type: SET_QUERY_DATA, payload,
});

const setBook = (payload) => ({
  type: SET_BOOK, payload,
});

// If Search button is pressed this function evokes. Always on first page. startIndex=1 in query.
export const getBooksFirstPage = (search, order, category) => async (dispatch) => {
  dispatch(toggleLoading(true));

  const data = await booksAPI.getBooksData(search, order, category, 1);
  if (data.kind) {
    const books = data.items;
    const items = data.totalItems;
    dispatch(refreshNextPage());
    dispatch(setBooks(books));
    dispatch(setTotalItems(items));
    dispatch(setQueryData({ search, order, category }));
  }

  dispatch(toggleLoading(false));
};

// This func invokes if LoadMore button is pressed.
// Always starts from 2 page, increments page in state so next call will be for page 3 and so on.
export const getMoreBooks = (queryData, page) => async (dispatch) => {
  dispatch(toggleLoading(true));

  const data = await booksAPI.getBooksData(queryData.search, queryData.order, queryData.category, page);
  if (data.kind) {
    const books = data.items;
    dispatch(setMoreBooks(books));
    dispatch(setNextPage());
  }

  dispatch(toggleLoading(false));
};

// This func invokes if we click on book card.
// Book info is needed for Book component to render.
export const setCurrentBook = (bookInfo) => async (dispatch) => {
  dispatch(setBook(bookInfo));
};

export default searchFormReducer;
