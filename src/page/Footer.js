import { Link} from "react-router-dom";
function Footer() {

  return (
    <div>

      {/* Sponsors Majeurs - START */}
      <div className='container'>
        <h3 id='h3_footer'>Sponsors Majeurs</h3>
        <div className="container div_footer-logo valign-wrapper center-align">
          <div id='div_brand_footer' className='center'>
            <div className='valign-wrapper col s6 m6 l6'>
              <img
                src="/img/Logo-Adidas.png"
                alt="Logo Adidas"
                id='logo_footer' />
            </div>

            <div className='valign-wrapper col s6 m6 l6'>
              <img
                src="/img/Logo-MaterielNet.png"
                alt="Logo Materiel.Net"
                id='logo_footer' />
            </div>

          </div>
        </div>
      </div>
      {/* Sponsors Majeurs - END */}

      {/* Partenaire Officiels - START */}
      <div>
        <h3 id='h3_footer'>Partenaire Officiels</h3>
        <div className="container div_footer-logo valign-wrapper center-align">
          <div id='div_brand_footer' className='center'>
            <div className='col s3 l3'>
              <img
              src="/img/Logo-Dreamaway.png"
              alt="Logo Dreamaway"
              id='logo_footer' />
            </div>

            <div className='col s3 l3'>
              <img
              src="/img/Logo-Fulllife.png"
              alt="Logo FullLife"
              id='logo_footer' />
            </div>

            <div className='col s3 l3'>
              <img
              src="/img/Logo-UNIVR_noir.png"
              alt="Materiel.Net Logo"
              id='logo_footer' />
            </div>

            <div className='col s3 l3'>
              <img
              src="/img/Logo-Meltdown.png"
              alt="Logo MeltDown"
              id='logo_footer' />
            </div>
          </div>
        </div>
      </div>
      {/* Partenaire Officiels - START */}

      <hr/>

      {/* Footer - START */}
      <footer className="page-footer white">
        <div className="row valign-wrapper">
          <div className="col s3 l3 center-align" >
            <div className='div_logo_footer'>
              <a href="#"><img  id='img_logo_footer' alt='Logo Instagram' src="/img/icon-instagram.png"/></a>
            </div>
            <div className='div_logo_footer'>
              <a href="#"><img id='img_logo_footer' alt='Logo Twitter' src="/img/icon-twitter.png"/></a>
            </div>
            <div className='div_logo_footer'>
              <a href="#"><img id='img_logo_footer' alt='Logo Twiitch' src="/img/icon-twitch.png"/></a>
            </div>
            <div className='div_logo_footer'>
              <a href="#"><img id='img_logo_footer' alt='Logo Facebook' src="/img/icon-facebook.png"/></a>
            </div>
          </div>
          <div className="col s3 l3">
            <h5 id="h5_footer" className="black-text left-align">ABOUT</h5>
            <ul>
              <li><Link className="text-lighten-3" to={"/actus"}>Actus</Link></li>
              <li><Link className="text-lighten-3" to={"/equipes"}>Team</Link></li>
              <li><Link className="text-lighten-3" to={"/aboutus"}>Qui sommes-nous</Link></li>
            </ul>
          </div>
          <div className="col s4 l3">
            <ul>
              <li><Link className="text-lighten-3" to={"./docs/CGU_Alkya.pdf"} >CGU</Link></li>
              <li><Link className="text-lighten-3" to={"./docs/Mentions_legales.pdf"} >Mentions Légales</Link></li>
              <li><a className="text-lighten-3" href="#">Politique de Confidentialité</a></li>
            </ul>
          </div>
          <div className="col s3 l3 center-align hide-on-small-only">
          <Link to = { '/'}>
              <img alt="Logo Alkya Colored" className="alkya_logo-col" src="/img/Logo-alkya_logo-colored.png"/>
              <img alt="Logo Alkya Black" className="alkya_logo-bla" src="/img/Logo-alkya_logo-black.png"/>

            </Link>
          </div>

        </div>
      </footer>
      {/* Footer - END */}

    </div>
  );
}

export default Footer;