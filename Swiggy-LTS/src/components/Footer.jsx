import Logo from '../assets/Logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router';

// <Link/> helps to change routes without reloading(or sending server request). <a> tag sends new request to server, resulting in full page reload
const Footer = ()=>{
    return (
        <div className="bg-zinc-200 bottom-0 w-full">
            <div className="px-32 py-10 flex justify-evenly gap-10 items-start md:text-lg flex-wrap">
                <div className='flex flex-row'>
                    <div className='flex justify-start items-center'>
                        <Link to="/"><img src={Logo} className='w-[50px] mr-2 min-w-[50px] max-w-[50px] h-auto'/></Link> <span className='font-bold text-xl text-orange-600 items-center' to="/">Swiggy</span>
                    </div>
                </div>
                <div className='flex justify-between gap-20 flex-col md:flex-row'>
                    <div className='flex flex-col  md:flex-row gap-20 w-full md:text-xl'>
                        <div className="font-semibold text-lg leading-10">
                            Company
                            <div className='font-light text-gray-500'>
                                <Link to="/about">About Us</Link><br />
                                <Link to="#">Swiggy Corporate</Link><br />
                                <Link to="#">Careers</Link><br />
                                <Link to="#">Team</Link><br />
                                <Link to="#">Swiggy One</Link><br />
                                <Link to="#">Swiggy Instamart</Link><br />
                                <Link to="#">Swiggy Dineout</Link><br />
                                <Link to="#">Swiggy Genie</Link><br />
                                <Link to="#">Minis</Link><br />
                            </div>
                        </div>
                        <div className='flex-col flex-wrap content-between items-stretch w-full'>
                            <div className="font-semibold text-lg leading-10 w-full">
                                Contact Us
                                <div className='font-light text-gray-500'>
                                    <Link to="#">Help & Support</Link><br />
                                    <Link to="#">Partner with Us</Link><br />
                                    <Link to="#">Rate with Us</Link><br />
                                </div>    
                                <div className="font-semibold text-lg leading-10 py-20 w-full">
                                        Legal
                                        <div className='font-light text-gray-500'>
                                            <Link to="#">Terms & Conditions</Link><br />
                                            <Link to="#">Cookie Policy</Link><br />
                                            <Link to="#">Privacy Policy</Link><br />
                                            <Link to="#">Investor Relations</Link><br />
                                        </div>     
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-20 w-full sm:flex-row'>
                        <div className="font-semibold text-lg leading-10">
                            Available in:
                            <div className='font-light text-gray-500'>
                                <Link to="#">Banglore</Link><br />
                                <Link to="#">Gurgaon</Link><br />
                                <Link to="#">Hyderabad</Link><br />
                                <Link to="#">Delhi</Link><br />
                                <Link to="#">Mumbai</Link><br />
                                <Link to="#">Pune</Link><br />
                                <p>685 cities</p>
                            </div>    
                        </div>
                        <div className="font-semibold text-lg leading-10">
                            Life at Swiggy
                            <div className='font-light text-gray-500'>
                                <Link to="#">Explore with Swiggy</Link><br />
                                <Link to="#">Swiggy News</Link><br />
                                <Link to="#">Snackables</Link><br />
                            </div>
                            <div className="font-semibold text-lg leading-10 py-20">
                                Social Links:
                                <div className='font-light flex justify-between text-gray-500 gap-2'>
                                    <Link to="#" className='hover:text-gray-700'><FaLinkedin/></Link><br />
                                    <Link to="#" className='hover:text-gray-700'><FaInstagram/></Link><br />
                                    <Link to="#" className='hover:text-gray-700'><FaFacebookF/></Link><br />
                                    <Link to="#" className='hover:text-gray-700'><FaPinterest/></Link><br />
                                    <Link to="#" className='hover:text-gray-700'><FaTwitter/></Link><br />
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <div className='px-20'>
                <div className='min-w-fit w-full h-0.5 bg-slate-900'>
                </div>
            </div>

            <div className='pt-10 pb-10 flex justify-center mx-auto items-center gap-10'>
                <div className='flex gap-10 items-center flex-wrap'>
                    <div className='font-bold text-2xl text-center md:text-sm'>
                        For better experience, download the Swiggy app now
                    </div>
                    <div className='flex justify-evenly gap-5 mx-auto'>
                        <Link to="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920" target='_blank' className='cursor-pointer'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="AppStore" />
                        </Link>

                        <Link to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='_blank' className='cursor-pointer'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="GooglePlay" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer