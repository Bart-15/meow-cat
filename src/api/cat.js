import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getByBreeds = (url, signal) => axios.get(url, {signal:signal});
