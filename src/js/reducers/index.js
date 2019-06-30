import { CREATE_TRIP, VIEW_TRIP, EDIT_TRIP } from "../constants/action_types";

//reducers produce the state of your application

//OBJECT SHAPE
let trip = {
  tripId: "",
  destination: "",
  departureAirportCode: "",
  departureDateTime: "",
  destinationArrivalDateTime: "",
  returnAirportCode: "",
  returnDateTime: "",
  returnArrivalDateTime: "",
}

let tripTestObject = [
  {
    tripId: "1",
    destination: "Japan",
    departureAirportCode: "YYZ",
    departureDateTime: new Date('September 5, 2019 07:00:00'),
    destinationArrivalDateTime: new Date('September 6, 2019 14:00:00'),
    returnAirportCode: "NRT",
    returnDateTime: new Date('September 18, 2019 17:55:00'),
    returnArrivalDateTime: new Date('September 18, 2019 22:30:00'),
  },
  {
    tripId: "2",
    destination: "India",
    departureAirportCode: "YYZ",
    departureDateTime: new Date('December 4, 2019 18:20:00'),
    destinationArrivalDateTime: new Date('December 6, 2019 6:40:00'),
    returnAirportCode: "DEL",
    returnDateTime: new Date('December 15, 2019 10:35:00'),
    returnArrivalDateTime: new Date('December 15, 2019 14:45:00'),
  }
]

const initialState = {
  //userId: "",
  trips: tripTestObject
}

function rootReducer(state = initialState, action){
  console.log("rootReducer");
  console.log(state);
  //the only way to change the state is by sending a signal to the store
  //  i.e. DISPATCHING an ACTION

  // the reducer calculates the next state depending on the action type
  // should at least return the initialState when no action type matches

  //when the action type matches, the reducer calculates the next state
  //  and returns a new object
  if (action.type === CREATE_TRIP){
    return Object.assign({}, state, {
      trips: state.trips.concat(action.payload)
    });
  }else if(action.type === EDIT_TRIP){
    const updatedItem = action.payload.trip;
    return {
      trips: [...state.trips].map(trip => {
        if(trip.tripId === updatedItem.tripId){
          return updatedItem;
        }else{
          return item;
        }
      })
    }
  }else if(action.type === VIEW_TRIP){
    return state;
  }

  return state;
}

export default rootReducer;
