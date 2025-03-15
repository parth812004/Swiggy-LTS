import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'


//Outlet is used to provide dynamic routing i.e. Based on conditions setup in our appRouter.jsx, content will be shown in the webpage. Here, <Header/> and <Footer/> will remain same throughout all routes. Just the content will be loaded dynamically instead of <Body/> we wrote earlier. ONE CONDITION: Children routes must be setup
const App = ()=> {
  return (
    <>
      <Header/>
      <Outlet/> {/* Outlet can take 3 possible values: <Body/>, <About/>, <Contact/> */}
      <Footer/>
    </>
  )
}
export default App

// App UI plan
{/* <Header>
  <Navbar>
  </Navbar>
</Header>

<Body>
  <Food items carousel/>
  <Restaurant carousel/>
</Body>

<Footer></Footer> */}


//Restaurant page UI
{/* <Header>
  <Navbar>
  </Navbar>
</Header>

<Body>
  <Restaurant Info/>
  <Deals/>
  <Menu card>
    <Food items/>
  </Menu card>
</Body>
<Cart/>
<Footer></Footer> */}