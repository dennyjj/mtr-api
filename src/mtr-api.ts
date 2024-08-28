import axios from 'axios';
import { BusResponse } from './types';

const API_BASE_URL = 'https://rt.data.gov.hk/v1/transport/mtr';

async function fetchMtrBus(language: 'en' | 'zh', routeName: string) {
  return axios.post<BusResponse>(`${API_BASE_URL}/bus/getSchedule`, {
    language,
    routeName,
  });
}

export { fetchMtrBus };
