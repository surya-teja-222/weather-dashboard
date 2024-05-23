const BASE_NAME = 'settings';

const DEFAULT_API_KEY = import.meta.env.VITE_WEATHER_API_ACCESS_KEY;

export const SET_API_KEY = `${BASE_NAME}/SET_API_KEY`;
export const setApiKey = (apiKey) => ({ type: SET_API_KEY, payload: apiKey });

const initialState = {
  apiKey: DEFAULT_API_KEY,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_KEY:
      return {
        ...state,
        apiKey: action.payload,
      };
    default:
      return state;
  }
}
