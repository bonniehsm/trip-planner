import { ACTION_TYPES } from "../constants/action_types";

const AT = { ...ACTION_TYPES };

//accepts a trip to be created as its payload
//dispatched when the user wants to create a new trip
export const createTrip = (trip) => ({
  type: AT.CREATE_TRIP,
  payload: { trip }
})

//accepts a trip to be edited as its payload
//dispatched when the user wants to edit details of a trip
export const editTrip = (trip) => ({
  type: AT.EDIT_TRIP,
  payload: { trip }
})

//dispatched when the user wants to view details of a trip
export const viewTripDetails = (tripId) => ({
  type: AT.VIEW_TRIP_DETAILS,
  payload: {tripId}
})

//dispatched when the user wants to view all trips
export const viewAllTrips = () => ({
  type: AT.VIEW_ALL_TRIPS
})

//accepts the id of the trip to be removed as its payload
//dispatched when the user wants to delete a trip
export const deleteTrip = (tripId) => ({
  type: AT.DELETE_TRIP,
  payload: {tripId}
})

/**  TO-DO ACTION TYPES  **/

//accepts a task to be added to the to-do list
export const addTask = (task) => ({
  type: AT.ADD_TASK,
  payload: task
})
