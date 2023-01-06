import React from "react";
import {configureStore} from '@reduxjs/toolkit'
import { CakeReducer } from "./Reducer";

export const store = configureStore({reducer : CakeReducer}) 
