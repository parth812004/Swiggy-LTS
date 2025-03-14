import RestaurantCard from './RestaurantCard'
import { useState,useEffect } from 'react'
import { API_URL,IMG_URL } from '../constants/config'
import ShimmerCard from './ShimmerCard'
import useRestaurant from '../utilities/useRestaurant'

//Continue from 21:00 (Lecture 14)

const CardContainer = () => {

    const [restaurantList,setRestaurantList] = useState([]); //(USED FOR RENDERING)Dynamically changing list on searching
    const [mainList,setMainList] = useState([]); //mainList(USED FOR FILTERING) = o/g restaurant list(content same in both restaurantList and mainList)
    const [searchText,setSearchText] = useState("")
    const [errorMessage,setErrorMessage] = useState("");
    const restaurantData = useRestaurant();  //Custom Hook, only used for fetching data from API. Data displaying will be done by CardContainer component
    console.log("restaurantData from custom hook= ",restaurantData);


    // useEffect(() => {             //To fetch the top restaurant chains in Mumbai
    //     const getRestaurantList = async () => {
    //         const response = await fetch(API_URL);
    //         try {
    //             if(response.ok)
    //             {
    //                 console.log("response",response)
    //                 const data = await response.json();
    //                 const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //                 console.log("restaurants: ",restaurants)
    //                 setRestaurantList(restaurants);
    //                 setMainList(restaurants);
    //             }
    //             else
    //             {
    //                 console.log("Error code: ",response.status)
    //                 // throw new Error("Something went wrong...")
    //                 if(response.status===400)
    //                 {
    //                     throw new Error("Bad Request, please contact the support team")
    //                 }
    //                 if(response.status===401)
    //                 {
    //                     throw new Error("Unauthorized request, kindly provide credentials")
    //                 }
    //                 if(response.status===403)
    //                 {
    //                     throw new Error("The requested content is forbidden")
    //                 }
    //                 if(response.status===404)
    //                 {
    //                     throw new Error("The server cannot find the requested resource")
    //                 }
    //                 else
    //                 {
    //                     throw new Error("Something went wrong...")
    //                 }
    //             }
    //         } catch (error) {
    //             setErrorMessage(error.message);
    //             console.log("Error: ", error.message);
    //         }
    //     };
    //     getRestaurantList();
    // }, []);

    const filterRestaurants = () =>{
        console.log("Checking best restaurants near you...")
        const filteredData = restaurantData?.restaurantList.filter((restaurant) => {
            return restaurant?.info?.avgRating >= 4.5;
        })
        restaurantData?.updateRestaurantList(filteredData)
        console.log("filteredData= ", filteredData)
    }

    let handleSearchText = (text) =>{
        setSearchText(text)
    }

    const handleSearch = () => {
        const newData = restaurantData?.mainList.filter((restaurant)=> (restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))) //To remove case sensitivity, we always convert searchText in lowercase
        console.log("newData: ",newData)
        restaurantData?.updateRestaurantList(newData)
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

    if(restaurantData?.errorMessage)
    {
        return (
            <div className='text-lg text-center'>
                {restaurantData?.errorMessage}
            </div>
        )
    }

    // if(restaurantList.length === 0 && searchText.length>0)
    // {
    //     return(
    //         <div className='text-lg text-center'>
    //             No items match your search '{searchText}'
    //         </div>
    //     )
    // }
    

    return (
        <div className="flex flex-col items-center relative">
            <div className="px-5 py-5 w-full">
                
                <div className="flex items-center w-full pb-4 px-5 justify-center">
                    <button className="border-black bg-gray-300 p-2 mx-5 my-5 absolute left-5 rounded-md hover:bg-gray-400" onClick={filterRestaurants}>Filter out the best restaurants</button>
                    
                    <div className='flex items-center w-[50%] mx-5 my-5'>
                        <input 
                            className='border-2 border-gray-300 focus:border-gray-400 h-9 p-2 mx-5 focus:outline-none rounded-lg w-full' 
                            type="text" value={searchText} onChange={(e)=>handleSearchText(e.target.value)} placeholder='Search for restaurants and food' onKeyDown={(e) => {
                                if (e.key === 'Enter' && searchText.trim().length>0) {
                                    handleSearch();
                                }
                            }}
                        /> 

                        {searchText.trim() && <button className='border-black text-sm bg-gray-300 px-3 py-2  rounded-md hover:bg-gray-400' value={searchText} onClick={handleSearch}>Search</button>} {/* && is called short-circuit operator*/}
                    </div>

                </div>

                
                {/* <div className='text-lg'>
                    {searchText}
                </div> */}
                
                {
                    <div className='flex flex-wrap justify-center gap-3'>
                        <h1 className="font-semibold px-5 text-xl w-full flex justify-start">Top restaurant chains in Mumbai</h1>

                        {
                            restaurantData?.restaurantList.length === 0 ? (
                                ( restaurantData?.mainList.length === 0 ? 
                                    (<ShimmerCard />) : <div className='text-lg text-center'>
                                                            No items match your search '{searchText}'
                                                        </div>
                                    
                                )
                            ) : //Means if no error, API call is successful. Also, till we don't get list of restaurantList, show ShimmerCard(empty string is considered as false,!false=true)
                                (restaurantData?.restaurantList.map((restaurant) => {
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