import { use } from "react"
import { useParams } from "react-router"
import useRestaurantMenu from "../utilities/useRestaurantMenu";

//useParams is used to extract parameters, which is useful in dynamic routing
const Menu = () => {
    const params = useParams();
    // console.log("params",params)
    const url = useRestaurantMenu(params.id)
    // console.log("Dynamic Menu URL is ",url)  
    return (
        <div>Menu Component</div>
    )
}

export default Menu