import './App.css'
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Layout from './Layout';
import Contact from './Contact';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';


let x = createBrowserRouter( [

{ path: '' , element: <Layout/> , children: [

{path: 'about' ,  element: <About/>},
{path: 'portofolio' ,  element: <Portfolio/>},
{path: 'contact' ,  element: <Contact/>  },
{index : true ,  element: <Home/>},



] }


]  )









function App() {
 

  return (
    <>

<RouterProvider router={x} />


    </>
  )
}

export default App
