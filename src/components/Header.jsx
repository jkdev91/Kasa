import { NavLink, Outlet } from "react-router-dom"


const Header = () => {

    return (
        <>
            <header>
              <div>
                  <img src="Kasa\public\LOGO-header.png" alt="logo kasa header" />
              </div>
              <nav>
                  <ul>
                      <NavLink to={"/"}><li>Accueil</li></NavLink>
                      <NavLink to={"/About"}><li>A propos</li></NavLink>
                  </ul>
              </nav>
            </header>
        
            <main>
              <Outlet />
            </main>
        </>
    )
  }
  
  export default Header