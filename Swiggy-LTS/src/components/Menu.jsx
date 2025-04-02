import { use } from "react"
import { useParams } from "react-router"
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantInfo from "./RestaurantInfo";

//useParams is used to extract parameters, which is useful in dynamic routing


//How this works:
// first, menu component is rendered when user will click on a restaurant card. it will have empty array initially (since we used useEffect with empty dependency array). Then restaurantID will be extracted from the url and then useRestaurantMenu() hook is used to get the data from the dynamic menu link by making API call. There state of menu(a state variable) is updated, and since that hook is used here, it will render again(this time with menu data)
const Menu = () => {
    const params = useParams();
    // console.log("params",params)
    const data = useRestaurantMenu(params?.id)
    // console.log("Menu Data is ",data)  
    return (
        <div>
            <RestaurantBanner title={data?.title?.name}/>
            <RestaurantInfo info={data?.title}/>
        </div>
    )
}

export default Menu