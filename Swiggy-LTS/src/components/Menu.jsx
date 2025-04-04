import { use } from "react"
import { useParams } from "react-router"
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantInfo from "./RestaurantInfo";
import CategoryContainer from "./CategoryContainer";

//useParams is used to extract parameters, which is useful in dynamic routing


//How this works:
// first, menu component is rendered when user will click on a restaurant card. it will have empty array initially (since we used useEffect with empty dependency array). Then restaurantID will be extracted from the url and then useRestaurantMenu() hook is used to get the data from the dynamic menu link by making API call. There state of menu(a state variable) is updated, and since that hook is used here, it will render again(this time with menu data)
const Menu = () => {
    const params = useParams();
    // console.log("params",params)
    const data = useRestaurantMenu(params?.id)
    // console.log("Menu Data is ",data)  

    const {title, normalMenu, nestedMenu} = data
    // console.log("complete data",data)
    
    console.log("collection: ",data?.normalMenu)
    return (
        <div className="w-10/12 max-w-[800px] mx-auto">
            <RestaurantBanner title={data?.title?.name}/>
            <RestaurantInfo info={data?.title}/>
            {
                normalMenu.map(category => {
                    return <CategoryContainer categoryTitle={category?.card?.card?.title} count={category?.card?.card?.itemCards?.length} collection={category?.card?.card?.itemCards}/>
                })
            }
        </div>
    )
}

export default Menu