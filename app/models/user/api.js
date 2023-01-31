import axios from 'axios';

export function apiTest(action) {
  const url = `https://equran.id/api/surat/1`;
  return axios
    .get(url, {
      params: {
        // page: action.data.page,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
