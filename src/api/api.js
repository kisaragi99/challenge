import * as axios from 'axios';

const APIKEY = 'AIzaSyDveR6j-bX3v8B_h4t8yZXzgUc_5ihxYbw';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: APIKEY,
  },
});

export const booksAPI = {

  getBooksData(elem, order, search, page) {
    return instance
      .get(`volumes?q=${search}&maxResults=${elem}&orderBy=${order}&startIndex=${page}`).then((resp) => resp.data);
  },

};
