import { Link } from "react-router-dom";


function Header() {

  return (
      <header  id="haut">
        <nav className="z-depth-0" role="navigation">

          <div id='div_alkya_logo' className="left nav-wrapper">
            <Link to="/">
              <img alt="Logo Alkya Colored" className="alkya_logo-col" src="/img/Logo-alkya_logo-colored.png"/>
              <img alt="Logo Alkya Black" className="alkya_logo-bla" src="/img/Logo-alkya_logo-black.png"/>
              </Link>
          </div>

          <div id='div_title' className="container ">
            <div className="center-align">
                <div id='nav_title' className='col s3 l3'><h5><Link to={"/actus#haut"} id="actus">Actus</Link> </h5></div>
                <div id='nav_title' className='col s3 l3'><h5><Link to={"/aboutus#haut"} id="aboutus">About Us</Link></h5></div>
                <div id='nav_title' className='col s3 l3'><h5><Link to={"/equipes#haut"} id="equipes">Equipes</Link></h5></div>
                <div id='nav_title' className='col s3 l3'><h5><Link to={"https://62d50f.myshopify.com/"} id="shop">Shop</Link></h5></div>
            </div>
          </div>
        </nav>
        <hr id='hr_nav'/>
      </header>
      
  );
}

export default Header;