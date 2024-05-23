import { toast } from 'react-toast';
import conditionsApi from '../api/weather';

const BASE_NAME = 'conditions';

const SET_CONDITIONS = `${BASE_NAME}/SET_CONDITIONS`;

const initialState = {
  conditions: {},
};

export function setConditions(id) {
  return async (dispatch, getState) => {
    if (!id) return;
    const { conditions } = getState();
    const { apiKey } = getState().settings;

    if (conditions && conditions[id]) {
      return;
    }

    try {
      const res = await conditionsApi.getCurrentConditions(id, apiKey);
      const data = await res.json();

      dispatch({
        type: SET_CONDITIONS,
        payload: {
          id,
          conditions: data[0],
        },
      });
    } catch (error) {
      toast.error('Failed to fetch conditions');
    }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONDITIONS:
      return {
        ...state,
        conditions: {
          ...state.conditions,
          [action.payload.id]: action.payload.conditions,
        },
      };
    default:
      return state;
  }
}
