import { CREATE_TRIP, EDIT_TRIP, VIEW_TRIP_DETAILS, DELETE_TRIP, VIEW_ALL_TRIPS } from "../constants/action_types";

//accepts a trip to be created as its payload
//dispatched when the user wants to create a new trip
export const createTrip = (trip) => ({
  type: CREATE_TRIP,
  payload: { trip }
})

//accepts a trip to be edited as its payload
//dispatched when the user wants to edit details of a trip
export const editTrip = (trip) => ({
  type: EDIT_TRIP,
  payload: { trip }
})

//dispatched when the user wants to view details of a trip
export const viewTripDetails = (tripId) => ({
  type: VIEW_TRIP_DETAILS,
  payload: {tripId}
})

//dispatched when the user wants to view all trips
export const viewAllTrips = () => ({
  type: VIEW_ALL_TRIPS
})

//accepts the id of the trip to be removed as its payload
//dispatched when the user wants to delete a trip
export const deleteTrip = (tripId) => ({
  type: DELETE_TRIP,
  payload: {tripId}
})
