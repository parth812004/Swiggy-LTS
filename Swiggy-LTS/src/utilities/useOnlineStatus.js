import { useState,useEffect } from "react"

const checkOnline = () => {
    const [isOnline,setisOnline] = useState(true) //Initally value=true, because webpage is loaded only because user is online. Else it wouldn't have loaded

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setisOnline(true)
        })
        
        window.addEventListener("offline", ()=>{
            setisOnline(false)
        })
    },[])

    return isOnline
}

export default checkOnline