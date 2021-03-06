import { ActionTypes } from '../ActionTypes';

export function hidden(state = true, action) {
  switch (action.type) {
    case ActionTypes.HEADER_HIDDEN:
      return action.payload;
    default:
      return state;
  }
}
