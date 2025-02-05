import axios from 'axios';
import { getEnv } from './config';

const environment = process.env.REACT_APP_ENV;
const { apiLink } = getEnv(environment);
export const api_link = apiLink;
export const supabase = {
  select: async (table, match) => {
    const { data } = await axios.post(`${api_link}/select`, { table, match });
    return data;
  },
  insert: async (table, body) => {
    const { data } = await axios.post(`${api_link}/insert`, { table, body });
    return data;
  },
  update: async (table, body, match) => {
    const { data } = await axios.post(`${api_link}/update`, {
      table,
      body,
      match,
    });
    return data;
  },
  delete: async (table, match) => {
    const { data } = await axios.post(`${api_link}/delete`, { table, match });
    return data;
  },
};
