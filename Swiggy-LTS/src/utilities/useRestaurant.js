import { useState,useEffect } from "react";
import { API_URL } from "../constants/config";

const useRestaurant = () => {
    const [restaurantList,setRestaurantList] = useState([]); //(USED FOR RENDERING)Dynamically changing list on searching
    const [mainList,setMainList] = useState([]); //mainList(USED FOR FILTERING) = o/g restaurant list(content same in both restaurantList and mainList)
    const [errorMessage,setErrorMessage] = useState("");

    useEffect(() => {
            const getRestaurantList = async () => { //To get data for Top restaurant chains in Mumbai 
                const response = await fetch(API_URL);
                try {
                    if(response.ok)
                    {
                        console.log("response",response)
                        const data = await response.json();
                        console.log("data: ",data.data)
                        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                        console.log("restaurants: ",restaurants)
                        setRestaurantList(restaurants);
                        setMainList(restaurants);
                    }
                    else
                    {
                        console.log("Error code: ",response.status)
                        // throw new Error("Something went wrong...")
                        if(response.status===400)
                        {
                            throw new Error("Bad Request, please contact the support team")
                        }
                        if(response.status===401)
                        {
                            throw new Error("Unauthorized request, kindly provide credentials")
                        }
                        if(response.status===403)
                        {
                            throw new Error("The requested content is forbidden")
                        }
                        if(response.status===404)
                        {
                            throw new Error("The server cannot find the requested resource")
                        }
                        else
                        {
                            throw new Error("Something went wrong...")
                        }
                    }
                } catch (error) {
                    setErrorMessage(error.message);
                    console.log("Error: ", error.message);
                }
            };
            getRestaurantList();
        }, []);

    //We can use object to return multiple variables
    const resObj={
        restaurantList : restaurantList,
        mainList : mainList,
        errorMessage : errorMessage,
        //Jo state variables bhejenge, uske update functions bhi bhejne padenge to properly update DOM. Use these(below) reference names in CardContainer to update the state variables
        updateRestaurantList : setRestaurantList,
        // updateMainList : setMainList,
        // updateErrorMessage : setErrorMessage
    }
    return resObj;
}

export default useRestaurant