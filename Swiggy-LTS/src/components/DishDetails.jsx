import { dishImgUrl } from "../constants/config"
import { useState } from "react"
// import useRestaurantMenu from "../utilities/useRestaurantMenu"

const DishDetails = ({isVeg,imgId,title,cost,avgRating,ratingCount,description}) => {
    const [showFullDescription,setshowFullDescription] = useState(false) //false by default because we are not showing complete description initially. Only after clicking '...more' we will be able to see full description. {false=>full description not shown ; true=>full description}
    return (
        <div className="flex justify-between py-7 border-b-[1px] border-gray-200">
            <div className="max-w-[600px]">
                {isVeg ? (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="6" stroke="#007A4D" strokeWidth="2" fill="white"/>
                            <circle cx="12" cy="12" r="5" fill="#007A4D"/>
                        </svg>) 
                        : 
                        (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="6" stroke="#D80027" strokeWidth="2" fill="white"/>
                            <path d="M12 8 L16 15 H8 Z" fill="#D80027" stroke="#D80027" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                          </svg>)}

                <p className="font-semibold text-[#02060cbf]">{title}</p>

                <p className="font-medium">₹ {cost}</p>

                <p className=" flex items-center gap-[5px] py-[5px]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#116649" className="inline">
                        <rect width="14" height="14" fill="white"></rect>
                            <path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649">
                            </path>
                    </svg><span className="text-[#116649] text-sm font-semibold">{avgRating}</span> <span className="text-sm font-normal text-[#02060C99]">({ratingCount})</span></p>

                <div>
                    <span className="py-2 text-[#02060C99] font-light">
                        {/* eg. !false = true=> true ka block will get executed. therefore, we see less textual content; and VICEE-VERSA*/}
                        { !showFullDescription ? description.split(" ").slice(0,25).join(" ") : description}  </span>
                        <span>{
                            description?.length > 25 &&
                            <button onClick={()=>setshowFullDescription(!showFullDescription)}>{ showFullDescription ? "  ...less" : "  ...more"}</button>
                        }
                    </span> 
                </div>
            </div>
            <div className="max-w-[200px]">
                <img src={dishImgUrl+imgId} className="w-[160px] h-[160px] rounded-3xl" />
            </div>
        </div>
    )
}
export default DishDetails