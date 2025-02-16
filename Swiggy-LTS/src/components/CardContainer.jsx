import RestaurantCard from './RestaurantCard'
import { useState,useEffect } from 'react'
import { API_URL,IMG_URL, restaurantDetails } from '../constants/config'


const CardContainer = () => {
    const restaurantDetails = []
    const [bestRestaurants, setBestRestaurants] = useState([]);

    useEffect(() => {
        const getRestaurantData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setBestRestaurants(restaurants);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        getRestaurantData();
    }, []);

    const filterRestaurants = () =>{
        console.log("Checking best restaurants near you...")
        const filteredData = bestRestaurants.filter((restaurant) => {
            return restaurant?.info?.avgRating >= 4.5;
        })
        setBestRestaurants(filteredData)
        console.log("filteredData= ", filteredData)
    }

useEffect(()=>{
    console.log("useEffect() called")
    try 
    {
        const getRestaurantData = async() =>{
            const response = await fetch(API_URL)
            const data = await response.json()
            const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            // console.log("(TEST)Food = ",data?.data?.cards[0]?.card?.card?.imageGridCards?.info[0]?.action?.text) 
            // console.log("food data= ",data?.data?.cards[0]?.card?.card?.imageGridCards?.info) 
            // console.log("restaurant data= ",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
            // console.log("restaurantDetails[]= ",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log("avgRating= ",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.avgRating)
        }
        getRestaurantData()
    } 
    catch (error) 
    {
        console.log("Error: ",error)
    }
},[])
    
console.log("Page rendered")

    return (
        <div className="flex flex-col items-center">
            <div className="px-4 py-5 w-full">
                <button className="border-black bg-gray-300 p-2 mx-5 my-5 rounded-md hover:bg-gray-400" onClick={filterRestaurants}>Filter out the best restaurants</button>
                <h1 className="font-semibold py-5 px-5 text-xl flex justify-start">Top restaurant chains in Mumbai</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        bestRestaurants.map((restaurant) => {
                            return <RestaurantCard 
                            {...restaurant?.info}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default CardContainer