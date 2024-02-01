
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
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
