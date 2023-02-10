import { Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

function Equipes() {
  return (
    <div>
      <div>
        <Header/>
      </div>
       {/* Equipes */}
      <div className='equipes'>
        <div className='container equipes'>
          <div className='row equipe'>
            <div className='col s6 offset-s3'>
              <h1 className='titre_equipe'>NOS EQUIPES</h1>
            </div>
          </div>
        </div>
        {/* Equipes / jeux - START */}
        <div className='equipes_jeux'>
            <div className='row bis equipe'>
                <div className='col s6'>
                    <Link to={"/line_up/league_of_legends"} >
                        <div className='center-align'>
                            <img src='../img_equipe/img_texte_jeu/texte_lol.png' alt='texte' className='texte_lol'/>
                            <img src='../img_equipe/img_team/img_team_lol.png' alt='team' className='team_jeu'/>
                            <img src='../img_equipe/img_logo/logo_lol.png' alt='logo' className='logo_lol'/>
                        </div>
                    </Link>
                </div>
                <div className='col s6'>
                  <Link to={"/line_up/valorant"} >
                        <div className='center-align'>
                            <img src='../img_equipe/img_texte_jeu/texte_valo.png' alt='texte' className='texte_valo'/>
                            <img src='../img_equipe/img_team/img_team_valo.png' alt='team' className='team_jeu'/>
                            <img src='../img_equipe/img_logo/logo_valo.jpg' alt='logo' className='logo_valo'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
            <div className='row bis equipe'>
                <div className='col s6'>
                  <Link to={"/line_up/raimbow_six_siege"} >
                        <div className='center-align'>
                            <img src='../img_equipe/img_texte_jeu/texte_raimbowsix.png' alt='texte' className='texte_jeu3'/>
                            <img src='../img_equipe/img_team/img_team_raimbowsix.png' alt='team' className='team_jeu'/>
                            <img src='../img_equipe/img_logo/logo_raimbowsix.jpg' alt='logo' className='logo_r6'/>
                        </div>
                    </Link>
                </div>
                <div className='col s6'>
                  <Link to={"/line_up/rocket_league"} >
                        <div className='center-align'>
                            <img src='../img_equipe/img_texte_jeu/texte_rocketleague.png' alt='texte' className='texte_jeu3'/>
                            <img src='../img_equipe/img_team/img_team_rocketleague.jpg' alt='team' className='team_jeu'/>
                            <img src='../img_equipe/img_logo/logo_rocketleague.png' alt='logo' className='logo_rl'/>
                        </div>
                    </Link>
                </div>
          </div>
        {/* Equipes / jeux - END */}
        </div>
        <hr></hr>
        <div className="line_up_footer">
            <Footer/>
        </div>
      </div>
  );

}

export default Equipes;
