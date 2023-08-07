import { configureStore } from "@reduxjs/toolkit";
import HomeRecentReducer from "./reducers/HomeRecentReducer";
import BusinessRecentReducer from "./reducers/BusinessRecentReducer";
import HomeContentReducer from "./reducers/HomeContentReducer";
import BusinessContentReducer from "./reducers/BusinessContentReducer";
import questionsReducer from "./reducers/questionsReducer";

export const Store=configureStore({
    reducer:{
        homeRecent:HomeRecentReducer,
        businessRecent:BusinessRecentReducer,
        homeContent:HomeContentReducer,
        businessContent:BusinessContentReducer,
        questions : questionsReducer
    }
})