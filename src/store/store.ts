import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import charactersReducer from "../reducers/personajesReducer";
import episodesReducer from "../reducers/episodesReducer";

const rootReducer = combineReducers({
   characters: charactersReducer,
   episodes: episodesReducer
});

export type IRootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) 
)