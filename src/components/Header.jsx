import { NavLink } from "react-router-dom"


const Header = () => {

    return (
        <>
            <header>
              <div>
                  <img src='../logo/LOGOheader.png' alt="logo kasa header" />
              </div>
              <nav>
                  <ul>
                      <NavLink to={"/"}><li>Accueil</li></NavLink>
                      <NavLink to={"/About"}><li>A propos</li></NavLink>
                  </ul>
              </nav>
            </header>

           
        </>
    )
  }
  
  export default Header