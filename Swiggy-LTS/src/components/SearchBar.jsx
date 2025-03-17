import { useState } from 'react'

// Since CardContainer is parent of SearchBar component and data cannot be passed from child->parent, we used props here. Custom Hook is used to return values, but functional components return jsx.
const SearchBar = ({mainData,update,searchText,updateSearchText}) => {

    let handleSearchText = (text) =>{
        updateSearchText(text)
    }

    const handleSearch = () => {
        const newData = mainData.filter((restaurant)=> (restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))) //To remove case sensitivity, we always convert searchText in lowercase
        console.log("newData: ",newData)
        update(newData)
    }
    return(
        <div className='flex flex-col sm:flex-row items-center mx-5 my-5 w-full sm:w-[50%]'>
            <input className='border-2 border-gray-300 focus:border-gray-400 h-9 p-2 mx-0 sm:mx-5 mb-3 sm:mb-0 focus:outline-none rounded-lg w-full' type="text" value={searchText} onChange={(e)=>handleSearchText(e.target.value)} placeholder='Search for restaurants and food' onKeyDown={(e) => {
                if (e.key === 'Enter' && searchText.trim().length>0) { handleSearch(); }
            }} /> 

            {searchText.trim() && <button className='border-black text-sm bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400 w-full sm:w-auto' value={searchText} onClick={handleSearch}>Search</button>} {/* && is called short-circuit operator*/}
        </div>
    )
}

export default SearchBar