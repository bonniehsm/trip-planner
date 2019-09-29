import { ACTION_TYPES } from "../constants/action_types";

const AT = {...ACTION_TYPES};
console.log(
  `
  REDUCER
  ${AT.ADD_TASK}
  `
);

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
/*
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
*/

const initialState = {
  //trips: tripTestObject
  trips: [],
  toDos: [  //temp - create default task
    {
      taskName: "first task",
      done: false,
      dueDate: new Date().toString(),
      priority: false
    }
  ]
}

function rootReducer(state = initialState, action){
  console.log("rootReducer");
  console.log(state);

  switch (action.type){
    case AT.CREATE_TRIP: {
      console.log(`createTrip reducer activated`);
      console.log(action.payload);
      return Object.assign({}, state, {
        trips: state.trips.concat(action.payload)
      });
    }
    case AT.EDIT_TRIP: {
      const updatedItem = action.payload.trip;
      return {
        trips: [...state.trips].map(trip => {
          if(trip.tripId === updatedItem.tripId){
            return updatedItem;
          }else{
            return trip;
          }
        })
      }
    }
    case AT.VIEW_TRIP_DETAILS: {
      const {id} = action.payload;
      return {
          tripDetailed: [...state.trips].filter(trip => trip.id == id)
      }
    }
    case AT.VIEW_ALL_TRIPS:{
      return state;
    }
    case AT.DELETE_TRIP: {
      const {id} = action.payload;
      return {
        //filter method creates a new array with all elements that pass the test implemented by the provided function
        trips: [...state.trips].filter(trip => trip.id !== id)
      }
    }
    case AT.ADD_TASK: {
      console.log(`Add Task reducer activated`);
      var newState = state;
      console.log(newState);
      newState.toDos.push(action.payload);
      console.log(newState);
      return newState;
    }
    default: return state;
  }

}

export default rootReducer;
