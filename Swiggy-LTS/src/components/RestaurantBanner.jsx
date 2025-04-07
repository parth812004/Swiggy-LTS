import useRestaurantMenu from "../utilities/useRestaurantMenu"


const RestaurantBanner = ({title,paddingBottom,paddingTop,fontSize}) => {
    return(
        <div className={`flex flex-row ${paddingTop} ${paddingBottom}`}>
            <h1 className={`${fontSize} font-semibold`}>{title}</h1>
        </div>
    )
}
export default RestaurantBanner