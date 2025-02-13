import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
import { restaurantDetails } from '../constants/config'
const CardContainer = () => {
    // const restaurantDetails = [
    //     {   
    //         name:"Chinese Wok1",
    //         rating:"4.0",
    //         deliveryTime:"35-40mins",
    //         cuisines:"Chinese, Asian, Tibetian, Desserts",
    //         location:"Santacruz East"
    //     },
    //     {   
    //         name:"Chinese Wok2",
    //         rating:"4.2",
    //         deliveryTime:"35-40mins",
    //         cuisines:"Chinese, Asian, Tibetian, Desserts",
    //         location:"Santacruz East"
    //     },
    //     {   
    //         name:"Chinese Wok3",
    //         rating:"4.3",
    //         deliveryTime:"35-40mins",
    //         cuisines:"Chinese, Asian, Tibetian, Desserts",
    //         location:"Santacruz East"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     },
    //     {
    //         name:"Achija",
    //         rating:"4.7",
    //         deliveryTime:"8-12 mins",
    //         cuisines:"Pizza, Pasta, Fast Food, Main Course, Indian",
    //         location:"Mulund"
    //     }
    // ]

    const [bestRestaurants,setBestRestaurants] = useState(restaurantDetails)
    const filterRestaurants = () =>{
        const filteredData = bestRestaurants.filter((restaurant) => {
            return restaurant.rating >= 4.5;
        })

        setBestRestaurants(filteredData)
        console.log(filteredData)
    }


    return (
        <div className="justify-center">
            <button className="border-black bg-gray-300 p-2 mt-5 rounded-md hover:bg-gray-400" onClick={filterRestaurants}>Filter out the best restaurants</button>
            <div className="px-10 py-5">
                <h1 className="font-semibold py-5 px-5 text-xl justify-center">Top restaurant chains in Mumbai</h1>
                <div className='flex flex-wrap justify-center'>
                    {
                        bestRestaurants.map((restaurant) => {
                            return <RestaurantCard 
                            {...restaurant}/>
                        })
                    }
                
                </div>
            </div>
        </div>
    )
}
export default CardContainer