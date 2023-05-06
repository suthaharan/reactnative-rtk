import { configureStore } from '@reduxjs/toolkit'

import peopleReducer  from '../features/people/peopleSlice'

// Create a STORE and attach the REDUCER
const store = configureStore({
    reducer:{
        people: peopleReducer,
    },
})

export default store