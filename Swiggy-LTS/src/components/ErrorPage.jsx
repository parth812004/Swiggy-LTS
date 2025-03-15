import App from "../App"
import { useRouteError } from "react-router"

// useRouteError is used to get exact information about error that has occured, so that we can show it in webpage for clear message to user
const ErrorPage = () => {
    const error = useRouteError()
    console.log("error: ",error)
    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-3xl text-center">
                The page you're looking for can't be found.
                <div className="mt-4">
                    Visit our main page <a href="/" className="text-blue-500 underline">here</a>
                </div>
            </div>
            <div className="text-xl text-center pt-5">
                <h1>Error {error?.status}: {error?.statusText}</h1>
                <h1>{error?.error?.message}</h1>
            </div>
        </div>
    )
}

export default ErrorPage