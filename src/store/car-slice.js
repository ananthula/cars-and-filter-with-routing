import {createSlice} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name:'carSlice',
    initialState:{
        cars:[],
        colors:[],
        manufacturers:[],
        page:1,
        car:{}
    },
    reducers:{
        fetchCars(state,action){
            state.cars = action.payload.cars;
            state.page = action.payload.page;
        },
        fetchColors(state,action){
            state.colors = action.payload.colors;
        },
        fetchManufacturers(state,action){
            state.manufacturers = action.payload.manufacturers;
        },
        fetchCarData(state,action){
            state.car =action.payload.car;
        },
        resetCarInfo(state) {
            state.car = {};
        }
    }
});

export const carActions = carSlice.actions;
export default carSlice;