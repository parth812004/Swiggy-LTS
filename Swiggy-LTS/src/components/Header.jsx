import Logo from '../assets/Logo.png'

const Header = () =>{
    return(
        <div className="flex justify-between px-8 py-4 shadow-md">
            <div className="flex items-center">
                <img src={Logo} className='w-[60px] mr-2'/> <span className='font-bold text-xl text-orange-600'>Swiggy</span>
            </div>
            <div className="flex justify-between items-center gap-7">
                <a href="#">🔍 Search</a>
                <a href="#">🛍️ Offers</a>
                <a href="#">👤 Sign In</a>
                <a href="#">🛒 Cart</a>
            </div>
        </div>
    )
}
export default Header