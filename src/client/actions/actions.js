import axios from 'axios';

export const VIDEO_DATA = 'VIDEO_DATA';

export function videoData(info) {
  const request = axios.get('/api/videodata')
  .then((response) => {
    console.log("response: ", response);
    return response;
  });
  return {
    type: VIDEO_DATA,
    payload: request,
  };
}
