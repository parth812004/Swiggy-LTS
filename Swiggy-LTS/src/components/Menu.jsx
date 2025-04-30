//CONTINUE FROM LECTURE 20 1:12:00
import { use } from "react"
import { useParams } from "react-router"
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantInfo from "./RestaurantInfo";
import CategoryContainer from "./CategoryContainer";
import MenuShimmerCard from "./MenuShimmerCard";

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
        (data?.normalMenu.length === 0) ?
            <MenuShimmerCard/>
        :
        (   <div className="w-10/12 max-w-[800px] mx-auto">
            <RestaurantBanner title={data?.title?.name}
                paddingBottom={"pb-10"}
                paddingTop={"pt-16"}
                fontSize={"text-3xl"}
            />
            <RestaurantInfo info={data?.title}/>
            {
                normalMenu.map(category => {
                    return <CategoryContainer 
                        categoryTitle={category?.card?.card?.title} 
                        count={category?.card?.card?.itemCards?.length} 
                        collection={category?.card?.card?.itemCards}
                        paddingTop={"pt-8"}
                    />
                })
            }
            
            {
                nestedMenu.map((mainCategory) => (
                    <div key={mainCategory?.card?.card?.title}>
                        <RestaurantBanner title={mainCategory?.card?.card?.title} 
                            paddingBottom={"pb-3"}
                            paddingTop={"pt-5"}
                            fontSize={"text-xl"}
                        />
                        <>
                            {
                                mainCategory?.card?.card?.categories.map((subCategory) => (
                                    <div key={subCategory?.title}>
                                        <CategoryContainer 
                                            categoryTitle={subCategory?.title}
                                            count={subCategory?.itemCards?.length} 
                                            collection={subCategory?.itemCards}
                                            paddingTop={"pt-3"}
                                        />
                                    </div>
                                ))
                            }
                        </>
                    </div>
                ))
            }
        </div>) 
    )
}

export default Menu