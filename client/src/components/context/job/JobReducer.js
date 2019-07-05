import {
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  FILTER_JOB,
  CLEAR_FILTER
} from '../types';

export default (state, action ) => {
  switch(action.type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      default:
        return state;
  }
}