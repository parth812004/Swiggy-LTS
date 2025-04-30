
const MenuShimmerCard = () => {
    return (
        <div className="px-52">
            <div class="flex flex-row pt-16 pb-10"><div className="h-8 w-20 bg-[#f7f7f7]"></div></div>
            <div className="p-4 rounded-[36px] bg-gradient-to-t from-gray-300 to-white">
                <div className="px-5 py-4 rounded-[20px] bg-white border-[1px] border-gray-300">
                    <div className="flex gap-3">
                        <div className="flex">
                            <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" className="w-6" alt="icon" />  
                            <div className="pl-2 font-semibold bg-[#f7f7f7]"></div>
                        </div>
                        •
                        <div className="font-semibold bg-[#f7f7f7]">
                            
                        </div>
                    </div>

                    <div className="text-orange-500 underline py-2 bg-[#f7f7f7]">
                        
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center pr-4 pt-3">
                            <div className="bg-gray-300 rounded-[50%] w-2 h-2"></div> {/* first circle */}
                            <div className="bg-gray-300 h-7 w-[2px] items-center"></div> {/* line joining 2 circles */}
                            <div className="bg-gray-300 rounded-[50%] w-2 h-2"></div> {/* last circle */}
                        </div>
                        <div className="flex flex-col leading-[33px]">
                            <div className="font-semibold flex flex-row bg-[#f7f7f7]"> <h1 className="font-light text-gray-500 pl-2 bg-[#f7f7f7]"></h1></div>
                            <div className="font-semibold bg-[#f7f7f7]"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuShimmerCard