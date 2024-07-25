import { request } from 'src/config/Http.jsx';
import { baseUrl } from './config';

const getPersons = async () =>
  request({
    method: 'GET',
    url: `${baseUrl}/person/`
  });


export default {
  getPersons,
};
