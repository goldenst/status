import {
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  
 
  JOB_ERROR,
  GET_JOB,
  CLEAR_JOB
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        jobs: action.payload,
        loading: false
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [action.payload, ...state.jobs ],
        loading: false
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== action.payload),
        loading: false
      };
      case CLEAR_JOB:
        return {
          ...state,
          jobs: null,
          error: null,
          current: null
        }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map(job => 
          job._id === action.payload._id ? action.payload : job
          ),
        loading: false
      };
    case JOB_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
