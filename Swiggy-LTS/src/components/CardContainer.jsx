import RestaurantCard from './RestaurantCard'

const CardContainer = () => {
    return (
        <div>
            <div className="px-10 py-5">
                <h1 className="font-semibold py-5 px-5 text-xl">Top restaurant chains in Mumbai</h1>
                <div className='flex flex-wrap'>
                    <RestaurantCard 
                    name="Chinese Wok"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>
                    
                    <RestaurantCard
                    name="Chinese Wok1"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>

                    <RestaurantCard
                    name="Chinese Wok2"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>

                    <RestaurantCard
                    name="Chinese Wok3"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>

                    <RestaurantCard
                    name="Chinese Wok4"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>

                    <RestaurantCard
                    name="Chinese Wok5"
                    rating="4.4"
                    deliveryTime="35-40mins"
                    cuisines="Chinese, Asian, Tibetian, Desserts"
                    location="Santacruz East"/>
                </div>
            </div>
        </div>
    )
}
export default CardContainer