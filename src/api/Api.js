import axios from 'axios';
import Auth from '../auth';
import { BASE_URL, UI_POSTS } from '../constants';

const headers = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const auth = new Auth();
  // const token = await auth.getValue(AS_USER_TOKEN);

  // if (token) {
  //   headers.Authorization = `Bearer ${token}`;
  // }
  return headers;
};

const request = async (method, path, body) => {
  const url = `${BASE_URL}${path}`;
  const options = {method, url, headers: await headers()};
  if (body) {
    options.data = body;
  }
  // console.log('options are:-', options, body);

  return axios(options);
};

export default class API {
  getPosts() {
    return request('GET', UI_POSTS);
  }
}
