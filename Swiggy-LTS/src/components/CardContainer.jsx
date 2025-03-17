import RestaurantCard from './RestaurantCard'
import { useState,useEffect } from 'react'
import { API_URL,IMG_URL } from '../constants/config'
import ShimmerCard from './ShimmerCard'
import useRestaurant from '../utilities/useRestaurant'
import SearchBar from './SearchBar'

//Continue from 21:00 (Lecture 14)

const CardContainer = () => {
    const [searchText,setSearchText] = useState("")
    const {restaurantList,mainList,errorMessage,updateRestaurantList} = useRestaurant();  //Custom Hook, only used for fetching data from API. Data displaying will be done by CardContainer component

    const filterRestaurants = () =>{
        console.log("Checking best restaurants near you...")
        const filteredData = restaurantList.filter((restaurant) => {
            return restaurant?.info?.avgRating >= 4.5;
        })
        updateRestaurantList(filteredData)
        console.log("filteredData= ", filteredData)
    }

    useEffect(()=>{ //To fetch resturant data like name, cuisines, avgRatings etc.
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

    if(errorMessage)
    {
        return (
            <div className='text-lg text-center'>
                {errorMessage}
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center relative">
            <div className="px-5 py-5 w-full">
                
                <div className="flex flex-col items-center w-full pb-4 px-5 sm:flex-row sm:flex-wrap sm:justify-center">
                    <button className="border-black bg-gray-300 p-2 mx-5 my-5 rounded-md hover:bg-gray-400 sm:absolute sm:left-5" onClick={filterRestaurants}>Filter out the best restaurants</button>
                    
                    <SearchBar mainData={mainList} update={updateRestaurantList} searchText={searchText} updateSearchText={setSearchText} className="w-full sm:w-auto mt-4 sm:mt-0"/>
                </div>
                
                {
                    <div className='flex flex-wrap justify-center gap-3'>
                        <h1 className="font-semibold px-5 text-xl w-full flex justify-start">Top restaurant chains in Mumbai</h1>

                        {
                            restaurantList.length === 0 ? (
                                ( mainList.length === 0 ? 
                                    (<ShimmerCard />) : <div className='text-lg text-center'>
                                                            No items match your search '{searchText}'
                                                        </div>
                                    
                                )
                            ) : //Means if no error, API call is successful. Also, till we don't get list of restaurantList, show ShimmerCard(empty string is considered as false,!false=true)
                                (restaurantList.map((restaurant) => {
                                    return <RestaurantCard
                                    {...restaurant?.info}
                                    key={restaurant?.info?.id} />
                                }))
                        }
                    </div>

                }
            </div>
        </div>
    )
}

export default CardContainer