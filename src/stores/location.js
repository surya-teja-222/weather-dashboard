import { toast } from 'react-toast';
import locationApi from '../api/location';

const BASE_NAME = 'selected_location';

const SET_LOCATION = `${BASE_NAME}/SET_LOCATION`;
const SET_IP_ADDR = `${BASE_NAME}/SET_IP_ADDR`;
const SET_AUTO_SELECTED = `${BASE_NAME}/SET_AUTO_SELECTED`;
const SET_SEARCH_OPTIONS = `${BASE_NAME}/SET_SEARCH_OPTIONS`;
const SET_NEARBY_LOCATIONS = `${BASE_NAME}/SET_NEARBY_LOCATIONS`;

export function setIpAddress() {
  return async (dispatch) => {
    try {
      const res = await locationApi.getIpAddr();

      const json = await res.json();
      dispatch({
        type: SET_IP_ADDR,
        payload: json.city,
      });
    } catch (err) {
      toast.error(
        'Failed to auto Detect City. Please select manually. Or diable Adblock',
        {
          autoClose: 5000,
        },
      );
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
      dispatch({
        type: SET_AUTO_SELECTED,
        payload: true,
      });
    } catch (err) {
      // do nothing
    }
  };
}

export function updateLocation(location) {
  return async (dispatch) => {
    dispatch({
      type: SET_LOCATION,
      payload: location,
    });
    dispatch({
      type: SET_AUTO_SELECTED,
      payload: false,
    });
  };
}

export function searchLocations(query) {
  return async (dispatch, getState) => {
    const { apiKey } = getState().settings;

    try {
      const res = await locationApi.getLocationsByQuery(query, apiKey);

      const json = await res.json();
      dispatch({
        type: SET_SEARCH_OPTIONS,
        payload: json,
      });
    } catch (err) {
      // do nothing
    }
  };
}

export const setAutoSelected = (autoSelected) => ({
  type: SET_AUTO_SELECTED,
  payload: autoSelected,
});

export const fetchNearByLocations = () => async (dispatch, getState) => {
  const { location } = getState().location;
  const { apiKey } = getState().settings;

  if (!apiKey) return;
  if (!location) return;

  try {
    const res = await locationApi.getNearByLocations(location.Key, apiKey);
    const json = await res.json();

    dispatch({
      type: SET_NEARBY_LOCATIONS,
      payload: json,
    });
  } catch (err) {
    // do nothing
  }
};

const initialState = {
  location: null,
  ipAddr: null,
  autoSelected: false,
  searchOptions: [],
  nearbyLocations: [],
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
    case SET_SEARCH_OPTIONS:
      return {
        ...state,
        searchOptions: [...action.payload],
      };
    case SET_NEARBY_LOCATIONS:
      return {
        ...state,
        nearbyLocations: [...action.payload],
      };
    default:
      return state;
  }
}
