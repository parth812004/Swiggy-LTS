import { use } from "react"
import { useParams } from "react-router"

//useParams is used to extract parameters, which is useful in dynamic routing
const Menu = () => {
    const params = useParams();
    console.log("params",params)
    return (
        <div>Menu Component</div>
    )
}

export default Menu