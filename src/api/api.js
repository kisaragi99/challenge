/* eslint-disable no-console */
import * as axios from 'axios';

const APIKEY = 'AIzaSyDveR6j-bX3v8B_h4t8yZXzgUc_5ihxYbw';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: APIKEY,
    maxResults: 30,
  },
});

export const booksAPI = {

  getBooksData(search, category, order, page) {
    let categoryParameter = '';

    if (category !== 'all') {
      categoryParameter = `+subject:${category}`;
    }

    return instance
      .get(`volumes?q=${search}${categoryParameter}&orderBy=${order}&startIndex=${page}`)
      .then((responce) => responce.data)
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error', err.message);
        }
      });
  },

};
