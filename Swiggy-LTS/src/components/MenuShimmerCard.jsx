const MenuShimmerCard = () => {
    return (
        <div className="w-10/12 max-w-[800px] mx-auto">
            {/* RestaurantInfo Shimmer Card */}
            <div className="flex flex-row pt-16 pb-10">
                <div className="h-8 w-3/12 bg-[#f7f7f7] animate-pulse"></div>
            </div>
            <div className="p-4 rounded-[36px] bg-gradient-to-t from-gray-300 to-white">
                <div className="px-5 py-4 rounded-[20px] bg-white border-[1px] border-gray-300">
                    <div className="flex gap-3">
                        <div className="flex">
                            <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" className="w-6" alt="icon" />
                            <div className="ml-2 w-[135px] font-semibold bg-[#f7f7f7] animate-pulse"></div>
                        </div>
                        •
                        <div className="font-semibold w-24 bg-[#f7f7f7]"></div>
                    </div>

                    <div className="text-orange-500 h-5 my-2 w-4/12 underline bg-[#f7f7f7] animate-pulse"></div>

                    <div className="flex">
                        <div className="flex flex-col items-center pr-4 pt-3">
                            <div className="bg-gray-300 rounded-[50%] w-2 h-2"></div> {/* first circle */}
                            <div className="bg-gray-300 h-7 w-[2px] items-center"></div> {/* line joining 2 circles */}
                            <div className="bg-gray-300 rounded-[50%] w-2 h-2"></div> {/* last circle */}
                        </div>
                        <div className="flex flex-col leading-[33px]">
                            <div className="font-semibold mt-2 flex flex-row bg-[#f7f7f7] animate-pulse">
                                <h1 className="font-light h-4 pl-2 w-32 bg-[#f7f7f7] animate-pulse"></h1>
                            </div>
                            <div className="font-semibold mt-5 h-4 pl-2 w-32 bg-[#f7f7f7] animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DishDetails Shimmer Card */}
            <div className="h-5 bg-[#f7f7f7] w-36 mt-9"></div>
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                    key={index}
                    className="flex justify-evenly py-7 pt-8 border-b-[1px] border-gray-200"
                >
                    <div className="w-[600px]">
                        <p className="h-4 mt-6 w-5 bg-[#f7f7f7]"></p>
                        <p className="h-4 mt-2 w-36 bg-[#f7f7f7]"></p>
                        <p className="h-4 mt-2 w-7 bg-[#f7f7f7]"></p>
                        <p className="h-4 mt-2 w-8 bg-[#f7f7f7]"></p>
                        <p className="h-4 mt-2 w-full bg-[#f7f7f7]"></p>
                        <p className="h-4 mt-2 w-full bg-[#f7f7f7]"></p>
                    </div>
                    <div className="w-[200px]">
                        <div className="w-[160px] h-[160px] ml-auto mr-0 rounded-3xl bg-[#f7f7f7]"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuShimmerCard;