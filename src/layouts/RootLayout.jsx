import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
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