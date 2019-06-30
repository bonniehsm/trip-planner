import { CREATE_TRIP, EDIT_TRIP, VIEW_TRIP, DELETE_TRIP } from "../constants/action_types";

export const createTrip = (trip) => ({
  type: CREATE_TRIP,
  payload: { trip }
})


export const editTrip = (trip) => ({
  type: EDIT_TRIP,
  payload: { trip }
})

export const viewTrip = () => ({
  type: VIEW_TRIP,
  payload
})

export const deleteTrip = (tripId) => ({
  type: DELETE_TRIP,
  payload: {id}
})
