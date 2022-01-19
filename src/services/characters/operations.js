import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { characters } from './actions';
import { url } from '../baseUrl';

toast.configure();

export const getCharacters = (url) => (dispatch) => {
  dispatch(characters.get.request());

  const options = {
    method: 'GET',
    url: url,
  };
  axios(options)
    .then((res) => {
      dispatch(characters.get.success(res));
    })
    .catch((err) => {
      dispatch(characters.get.error(err));
      toast.error(err.message);
    });
};
