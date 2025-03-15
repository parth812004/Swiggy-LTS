import { createBrowserRouter } from 'react-router';
import About from '../components/About';
import Contact from '../components/Contact';
import App from '../App';
import Body from '../components/Body';
import ErrorPage from '../components/ErrorPage';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu'

// createBrowserRouter is used to create & setup routes in our project
const appRouter = createBrowserRouter([
    {
        path : "/",
        Component : App,
        children : [
            {
                path : "",
                Component : Body
            },
            {
                path : "about",
                Component : About
            },
            {
                path : "search",
                Component : SearchBar
            },
            {
                path : "contact",
                Component : Contact
            },
            {
                path : "menu/:title/:id", //: makes id a dynamic parameter. Id we write menu/id, it becomes a hard-coded value resulting in <Error/>
                Component : Menu
            }
        ],
        errorElement : <ErrorPage/>
    },
    
])

export default appRouter