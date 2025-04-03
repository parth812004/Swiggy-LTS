import DishDetails from "./DishDetails"

const CategoryContainer = ({categoryTitle,count,collection}) => { //This is the main container of all dish categories like recommended etc.
    return (
        <div className="pt-8">
            <h1 className="text-lg font-semibold">{categoryTitle} ({count})</h1>
            {
                collection.map(foodItem => {
                    return <DishDetails key={foodItem?.id}
                    isVeg={foodItem?.card?.info?.isVeg}
                    imgId={foodItem?.card?.info?.imageId}
                    title={foodItem?.card?.info?.name}
                    cost={foodItem?.card?.info?.defaultPrice / 100}
                    avgRating={foodItem?.card?.info?.ratings?.aggregatedRating?.rating}
                    ratingCount={foodItem?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                    description={foodItem?.card?.info?.description}
                    />
                })
            }

        </div>
    )
}
export default CategoryContainer