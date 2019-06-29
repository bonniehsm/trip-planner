import { ADD_TRIP } from "../constants/action_types";

export function addTrip(payload) {
  return { type: ADD_TRIP, payload };
}
