import { IMG_URL } from "../constants/config"
import { Link } from "react-router"

const RestautantCard = ({id,name,avgRating,sla,cuisines,locality,cloudinaryImageId}) =>{ 
    //{/* Can also write const RestautantCard = (props) =>{
    //{props.name}
    //{props.rating}, etc. in code} 
    //*/}
    return(
        <Link to={`/menu/${name}/${id}`} className="px-5">
            <div className="flex flex-row py-3 w-[300px] h-[200px]">
                <img src={IMG_URL+cloudinaryImageId} className=" w-full h-full object-cover rounded-2xl" alt="demo img" />
            </div>
            <div className="leading-6">
                <div className="text-xl font-semibold max-w-[300px]">{name}</div>
                    <div className="flex">
                        <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" className="w-6" alt="icon" />  
                        <div className="pl-2 font-light">{avgRating} • {sla?.deliveryTime} mins</div>
                    </div>
                    <div className="font-light text-gray-500 w-[300px]">{cuisines.join(', ')}</div>
                    <div className="font-light text-gray-500">{locality}</div>
            </div>
        </Link>
    )
}

export default RestautantCard