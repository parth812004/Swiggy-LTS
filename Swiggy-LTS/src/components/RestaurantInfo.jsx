import useRestaurantMenu from "../utilities/useRestaurantMenu"

const RestaurantInfo = ({info}) => {
    return (
        <>
            <div className="mx-[25%] p-5 rounded-[36px] bg-gradient-to-t from-gray-300 to-white">
                <div className="px-3 py-4 rounded-[20px] bg-white  border-[1px] border-gray-300">
                    <div className="flex gap-4">
                        <div className="flex">
                            <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" className="w-6" alt="icon" />  
                            <div className="pl-2 font-semibold">{info?.avgRatingString} ({info?.totalRatingsString})</div>
                        </div>
                        •
                        <div className="font-semibold">
                            {info?.costForTwoMessage}
                        </div>
                    </div>

                    <div className="text-orange-500 underline py-2">
                        {Array.isArray(info?.cuisines) && info?.cuisines.length > 0 
                            ? info.cuisines.join(', ') 
                            : info?.cuisines}
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center pr-4 pt-2">
                            <div className="bg-gray-500 rounded-[50%] w-3 h-3"></div> {/* first circle */}
                            <div className="bg-gray-500 h-6 w-1 items-center"></div> {/* line joining 2 circles */}
                            <div className="bg-gray-500 rounded-[50%] w-3 h-3"></div> {/* last circle */}
                        </div>
                        <div className="flex flex-col leading-8">
                            <div className="font-semibold flex flex-row">Outlet <h1 className="font-light text-gray-500 pl-2">{info?.areaName}</h1></div>
                            <div className="font-semibold"> {info?.sla?.minDeliveryTime} - {info?.sla?.maxDeliveryTime} mins</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 
export default RestaurantInfo