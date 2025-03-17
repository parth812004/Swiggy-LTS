const ShimmerCard = () => {
  return new Array(20).fill(0).map( ()=>{

      return (
        <div className="px-5">
          <div className="flex flex-row py-3 w-[300px] h-[200px] rounded-md">
            <div
              className=" w-full h-full object-cover rounded-2xl bg-[#f7f7f7]"
              alt="demo img"
            />
          </div>
          <div className="leading-6 ml-1">
            <div className="text-xl font-semibold h-5 bg-[#f7f7f7] mb-2 w-full"></div>
            <div className="flex mb-2">
              <div className="w-12 bg-[#f7f7f7] h-4 mr-2" alt="icon" />
              <div className="w-12 pl-2 font-light h-4 bg-[#f7f7f7] mx-2"></div>
            </div>
            <div className="font-light text-gray-500 h-4 mb-2 bg-[#f7f7f7] w-full"></div>
            <div className="font-light text-gray-500 h-4 mb-2 bg-[#f7f7f7] w-full"></div>
          </div>
        </div>
      );
      }
          
  )

}

export default ShimmerCard