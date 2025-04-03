import useRestaurantMenu from "../utilities/useRestaurantMenu"


const RestaurantBanner = ({title}) => {
    return(
        <div className="flex flex-row pt-16 pb-10">
            <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
    )
}
export default RestaurantBanner