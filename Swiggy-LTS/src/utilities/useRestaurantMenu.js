import { useState,useEffect } from "react"
import { generateMenuUrl } from "../constants/config"


//Continue from __:__(Lecture __)
const useRestaurantMenu = (id) => {
    const MENU_API_URL = generateMenuUrl(id)
    // console.log("Dynamic Menu URL is ",MENU_API_URL)
    const [restaurantInfo,setRestaurantInfo] = useState([])
    const [menu,setMenu] = useState([])
    const [normalData,setNormalMenu] = useState([])
    const [nestedData,setnestedMenu] = useState([])
    const [errorMessage,setErrorMessage] = useState("")
    const getRestaurantList = async () => { 
        try {
            const response = await fetch(MENU_API_URL);
            // console.log("MENU_URL response",response)
            if(response.ok)
            {
                const data = await response.json();
                // console.log("MENU_URL data: ",data?.data)
                // console.log("API call Successful...ALL OK")
                // console.log("Menu Data is as follows:")
                // console.log("Data: ",data?.data?.cards)

                const title = data?.data?.cards[2]?.card?.card?.info?.name
                // console.log("Title: ",title)

                const costForTwo = data?.data?.cards[2]?.card?.card?.info?.costForTwoMessage
                // console.log("Cost for 2: ",costForTwo)

                const avgRating = data?.data?.cards[2]?.card?.card?.info?.avgRatingString
                // console.log("Restaurant AvgRating: ",avgRating)

                const totalRatings = data?.data?.cards[2]?.card?.card?.info?.totalRatingsString
                // console.log("Total Ratings: ",totalRatings)

                const outletName = data?.data?.cards[2]?.card?.card?.info?.areaName
                // console.log("Outlet: ",outletName)

                const minTime = data?.data?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime
                const maxTime = data?.data?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime
                // console.log(`Delivery time: ${minTime}-${maxTime} mins`)

                const cuisines = data?.data?.cards[2]?.card?.card?.info?.cuisines[0]
                // console.log("Cuisines: ",cuisines)
                
                const restaurantData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                // console.log("restaurant complete menu: ",restaurantData)
                // console.log("restaurant menu: ",data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

                setNormalMenu(restaurantData.filter(resItem => resItem?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
                // console.log("normalData: ",normalData)       //Recommended dishes data
                
                setnestedMenu(restaurantData.filter(resItem => resItem?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'))       //rest all data
                // console.log("nestedData: ",nestedData)

                // setMenu([title,costForTwo,avgRating,totalRatings,outletName,minTime,maxTime,cuisines])
                setRestaurantInfo(data?.data?.cards[2]?.card?.card?.info)
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
        title : restaurantInfo,
        normalMenu : normalData,
        nestedMenu : nestedData
    }
    // console.log("menuData:",menuData)
    // console.log("restaurantInfo:",restaurantInfo)
    return menuData
}
export default useRestaurantMenu