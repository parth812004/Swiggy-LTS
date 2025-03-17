// filepath: /Users/parthsoni/Documents/GitHub/Swiggy-LTS/Swiggy-LTS/src/components/ShimmerCard.jsx
const ShimmerCard = () => {
  return new Array(20).fill(0).map((card, index) => {
      return (
        <div key={index} className="px-2 sm:px-4 md:px-5">
          <div className="flex flex-col sm:flex-row py-3 w-full sm:w-[300px] h-[200px] rounded-md">
            <div
              className="w-full h-full object-cover rounded-2xl bg-[#f7f7f7] shimmer"
              alt="demo img"
            />
          </div>
          <div className="leading-6 ml-1 mt-2 sm:mt-0">
            <div className="text-lg sm:text-xl font-semibold h-5 bg-[#f7f7f7] mb-2 w-full shimmer"></div>
            <div className="flex mb-2">
              <div className="w-10 sm:w-12 bg-[#f7f7f7] h-4 mr-2 shimmer" alt="icon" />
              <div className="w-10 sm:w-12 pl-2 font-light h-4 bg-[#f7f7f7] mx-2 shimmer"></div>
            </div>
            <div className="font-light text-gray-500 h-4 mb-2 bg-[#f7f7f7] w-full shimmer"></div>
            <div className="font-light text-gray-500 h-4 mb-2 bg-[#f7f7f7] w-full shimmer"></div>
          </div>
        </div>
      );
  });
}

export default ShimmerCard;