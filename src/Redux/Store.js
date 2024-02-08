import { configureStore } from "@reduxjs/toolkit"; 
import statusreducer from "./Slice"

export default configureStore({
    reducer:{
        status:statusreducer
    },
})