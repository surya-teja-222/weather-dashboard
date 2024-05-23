import locationApi from '../api/location';

const BASE_NAME = 'selected_location';

const SET_LOCATION = `${BASE_NAME}/SET_LOCATION`;
const SET_IP_ADDR = `${BASE_NAME}/SET_IP_ADDR`;
const SET_AUTO_SELECTED = `${BASE_NAME}/SET_AUTO_SELECTED`;

export function setIpAddress() {
  return async (dispatch) => {
    try {
      const res = await locationApi.getIpAddr();

      const json = await res.json();
      dispatch({
        type: SET_IP_ADDR,
        payload: json.ip,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function setLocationFromIp() {
  return async (dispatch, getState) => {
    const { ipAddr } = getState().location;
    const { apiKey } = getState().settings;

    if (!ipAddr) return;

    try {
      const res = await locationApi.getLocationsByQuery(ipAddr, apiKey);

      const json = await res.json();

      dispatch({
        type: SET_LOCATION,
        payload: json[0],
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export const setAutoSelected = (autoSelected) => ({
  type: SET_AUTO_SELECTED,
  payload: autoSelected,
});

const initialState = {
  location: null,
  ipAddr: null,
  autoSelected: false,
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IP_ADDR:
      return {
        ...state,
        ipAddr: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_AUTO_SELECTED:
      return {
        ...state,
        autoSelected: action.payload,
      };
    default:
      return state;
  }
}
