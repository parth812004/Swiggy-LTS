
const RestautantCard = ({name,rating,deliveryTime,cuisines,location}) =>{ 
    {/* Can also write const RestautantCard = (props) =>{
    {props.name}
    {props.rating}, etc. in code} 
    */}
    return(
        <div className="px-5">
            <div class="flex flex-row py-3 w-[300px] h-[200px]">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" className=" w-full h-full object-cover rounded-2xl" alt="Chinese Wok" />
            </div>
            <div className="leading-6">
                <div className="text-xl font-semibold">{name}</div>
                    <div className="flex">
                        <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" className="w-6" alt="icon" />  
                        <div className="pl-2 font-light">{rating} • {deliveryTime}</div>
                    </div>
                    <div className="font-light text-gray-500">{cuisines}</div>
                    <div className="font-light text-gray-500">{location}</div>
            </div>
        </div>
    )
}

export default RestautantCard