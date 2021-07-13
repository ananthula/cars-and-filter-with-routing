import {carActions} from './car-slice';
import axios from 'axios';
import { uiActions } from './ui-slice';


export const getCarData = (manufacturer,color,page) =>{
    let url = "https://auto1-mock-server.herokuapp.com/api/cars";
    if(manufacturer||color || page){
        url = `${url}?manufacturer=${manufacturer}&color=${color}&sort=asc&page=${page}`
    }

    return async (dispatch) =>{
        const fetchCarData = async() =>{
            
            const response = await axios(url);
        
        if(response.statusText !== 'OK'){
            throw new Error();
        }

        const data = response.data.cars;
        return data;
    
    };
    try{
        const carsData =  await fetchCarData();
        dispatch(carActions.fetchCars({
            cars:carsData || [],
            page:page
            
        }))

    }
    catch(error){
        dispatch(
            uiActions.showNotification({
                status: error.response.status + " " + error.response.statusText,
                title: 'Error!',
             
            })
          );
    }
};
};

export const getColorData = () =>{
    return async (dispatch) =>{
        const fetchColorData = async() =>{
            const response = await axios('https://auto1-mock-server.herokuapp.com/api/colors');
            if(response.statusText !== 'OK'){
                throw new Error();
            }
            const data = response.data;
            return data;

        };
        try{
            const colorData =  await fetchColorData();
            dispatch(carActions.fetchColors({
                colors:colorData || []
            }))
    
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                    status: error.response.status + " " + error.response.statusText,
                    title: 'Error!'
                })
              );
        }

    };
};

export const getManufacturerData = () =>{
    return async (dispatch) =>{
        const fetchManufacturerData = async() =>{
            const response = await axios('https://auto1-mock-server.herokuapp.com/api/manufacturers');
            if(response.statusText !== 'OK'){
                throw new Error();
            }
            const data = response.data;
            return data;

        };
        try{
            const manufacturerData =  await fetchManufacturerData();
            dispatch(carActions.fetchManufacturers({
                manufacturers:manufacturerData || []
            }))
    
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                    status: error.response.status + " " + error.response.statusText,
                    title: 'Error!'
                })
              );
        }   

    };
};

export const getCarInfo = (stockNumber) =>{
    return async (dispatch) =>{
        const fetchCarInfo = async()=>{
            const response = await axios('https://auto1-mock-server.herokuapp.com/api/cars/'+`${stockNumber}`);
            if(response.statusText !== 'OK'){
                throw new Error();
            }

            const data = response.data.car;
            return data;

        };
        try{
            const carInfo =  await fetchCarInfo();
            dispatch(carActions.fetchCarData({
                car:carInfo || {}
            }))
    
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                  status: error.response.status + " " + error.response.statusText,
                  title: 'Error!',
                })
              );
        }
        }
    }
