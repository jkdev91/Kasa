
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Appartment from './pages/Appartment';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='appartments/:id' element={<Appartment />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )

)

const App = () => {

  return (
    <>
      <RouterProvider router= {router} />
    </>
  )
}

export default App
