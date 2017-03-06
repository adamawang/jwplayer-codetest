export default function VideoReducer (state = [], action) {
  switch(action.type) {
    case 'VIDEO_DATA':
      return action.payload;
    default:
      return state;
  }
}
