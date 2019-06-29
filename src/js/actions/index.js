import { ADD_TRIP, EDIT_TRIP, VIEW_TRIP, DELETE_TRIP } from "../constants/action_types";

export const addTrip = (payload) => ({
  type: ADD_TRIP,
  payload
})


export const editTrip = (payload) => ({
  type: EDIT_TRIP,
  payload
})

export const viewTrip = () => ({
  type: VIEW_TRIP
})

export const deleteTrip = (tripId) => ({
  type: DELETE_TRIP,
  payload: {id}
})
