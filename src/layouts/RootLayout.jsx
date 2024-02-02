import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const RootLayout = () => {

    return (
      <>
        <Header />
        <main className="mainbody">
          <Outlet />
        </main>
       <Footer /> 

      </>
    
    )
  }
  
  export default RootLayout