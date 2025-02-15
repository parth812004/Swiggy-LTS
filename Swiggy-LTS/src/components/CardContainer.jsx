import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
import { restaurantDetails, API_URL } from '../constants/config'

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
        const filteredData = restaurantDetails.filter((restaurant) => {
            return restaurant.rating >= 4.5;
        })

        setBestRestaurants(filteredData)
        console.log(filteredData)
    }


    const getRestaurantData = async() =>{
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log("(TEST)Food = ",data.data.cards[0].card.card.imageGridCards.info[0].action.text) 
        console.log("food data= ",data.data.cards[0].card.card.imageGridCards.info) 
        console.log("restaurant data= ",data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants) 
    }

    getRestaurantData()

    return (
        <div className="flex justify-center">
            <div className="px-10 py-5">
                <button className="border-black bg-gray-300 p-2 mx-5 my-5 rounded-md hover:bg-gray-400" onClick={filterRestaurants}>Filter out the best restaurants</button>
                <h1 className="font-semibold py-5 px-5 text-xl flex justify-start">Top restaurant chains in Mumbai</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
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