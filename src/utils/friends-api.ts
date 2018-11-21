import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getPublicStartupBattles, getPrivateStartupBattles};

getPublicStartupBattles() {
  const url = `${BASE_URL}/api/friends/public`;
  return axios.get(url).then(response => response.data);
}

getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/friends/private`;
  return axios.get(url).then(response => response.data);
}