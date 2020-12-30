import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//THIS IS HOW WE USE INSIDE THE COMPONENT
export const useStateValue = () => useContext(StateContext);
