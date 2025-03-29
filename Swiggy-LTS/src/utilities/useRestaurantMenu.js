import { useState,useEffect } from "react"
import { generateMenuUrl } from "../constants/config"


//Continue from 6:30
const useRestaurantMenu = (id) => {
    const MENU_API_URL = generateMenuUrl(id)
    console.log("Dynamic Menu URL is ",MENU_API_URL)

    const [menu,setMenu] = useState([])
    const [errorMessage,setErrorMessage] = useState("")
    const getRestaurantList = async () => { 
        try {
            const response = await fetch(MENU_API_URL);
            console.log("MENU_URL response",response)
            if(response.ok)
            {
                const data = await response.json();
                console.log("MENU_URL data: ",data.data)
                console.log("ALL OK")
                // const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                // console.log("restaurants: ",restaurants)
                // setRestaurantList(restaurants);
                // setMainList(restaurants);
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
    useEffect(() => {
        getRestaurantList();
    }, []);
    const menuData={
        url : MENU_API_URL
    }
    return menuData
}
export default useRestaurantMenu