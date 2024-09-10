import axios from 'axios';
import { BusResponse } from './types';
import { API_BASE_URL, BUS_SCHEDULE } from './constants';

async function fetchMtrBus(language: 'en' | 'zh', routeName: string) {
  return axios.post<BusResponse>(`${API_BASE_URL}${BUS_SCHEDULE}`, {
    language,
    routeName,
  });
}

export { fetchMtrBus };
