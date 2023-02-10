import { Link, useParams } from "react-router-dom";
import "../App.css"
import Header from "./Header";
import Footer from "./Footer";

function Line_Up(){

    // Recupère le jeu regardé 
    let {jeu} = useParams();
    // Liste des infomations sur les jeux
    const liste_jeux = {league_of_legends : [{officiel : ["../img_equipe/img_texte_jeu/texte_lol.png","../img_equipe/img_line_up/lol/img_line_up_lol.PNG"],
                                            joueurs : [["../img_equipe/img_line_up/lol/joueur/whiteinn.png","ALEXANDRU","WHITEINN","KOLOZSVARI"],
                                                    ["../img_equipe/img_line_up/lol/joueur/cabochard.png","LUCAS","CABOCHARD","SIMON MESLET"],
                                                    ["../img_equipe/img_line_up/lol/joueur/kaori.png","MUHAMMED","KAORI","SENTURK"],
                                                    ["../img_equipe/img_line_up/lol/joueur/saken.png","LUCAS","SAKEN","FAYARD"],
                                                    ["../img_equipe/img_line_up/lol/joueur/skeanz.PNG","DUNCAN","SKEANZ","MARQUET"]],
                                            coach : [["../img_equipe/img_line_up/lol/coach/nerroh.png","STEFAN","NERROH","PEREIRA"]]}],

                        valorant : [{officiel : ["/img_equipe/img_texte_jeu/texte_valo.png","/img_equipe/img_line_up/valorant/img_line_up_valo.PNG"],
                                            joueurs : [["../img_equipe/img_line_up/valorant/joueur/ceNder.png","JOKUBAS","CENDER","LABUTIS"],
                                                    ["../img_equipe/img_line_up/valorant/joueur/bonecold.png","SANTERI","BONECOLD","SASSI"],
                                                    ["../img_equipe/img_line_up/valorant/joueur/molsi.png","MICHAL","MOLSI","LACKI"],
                                                    ["../img_equipe/img_line_up/valorant/joueur/destrian.png","TOMAS","DESTRIAN","LINIKAS"],
                                                    ["../img_equipe/img_line_up/valorant/joueur/twisten.png","KAREL","TWISTEN","ASENBRENER"]],
                                            coach : [["../img_equipe/img_line_up/valorant/coach/salah.png","SALAH","SALAH","BARAKAT"],
                                                    ["../img_equipe/img_line_up/valorant/coach/gorilla.png","HARRY","GORILLA","MEPHAM"]]}],
                        
                        raimbow_six_siege : [{officiel : ["../img_equipe/img_texte_jeu/texte_raimbowsix.png","../img_equipe/img_line_up/r6/img_line_up_r6.png"],
                                            joueurs : [["../img_equipe/img_line_up/r6/joueur/hicks.png","THEOPHILE","HICKS","DUPONT"],
                                                    ["../img_equipe/img_line_up/r6/joueur/risze.png","VALENTIN","RISZE","LIRADELFO"],
                                                    ["../img_equipe/img_line_up/r6/joueur/alphama.png","LEO","ALPHAMA","ROBINE"],
                                                    ["../img_equipe/img_line_up/r6/joueur/aceez.png","MAURICE","ACEEZ","ERKELENZ"],
                                                    ["../img_equipe/img_line_up/r6/joueur/korey.png","LUKAS","KOREY","ZWINGMANN"]],
                                            coach : [["../img_equipe/img_line_up/r6/coach/gig.png","ELLIS","GIG","HINDLE"]]}],

                        rocket_league : [{officiel : ["../img_equipe/img_texte_jeu/texte_rocketleague.png","../img_equipe/img_line_up/rl/img_line_up_rl.png"],
                                            joueurs : [["../img_equipe/img_line_up/rl/joueur/jknaps.png","JACOB","JKNAPS","KNAPMAN"],
                                                    ["../img_equipe/img_line_up/rl/joueur/kronovi.png","CAMERON","KRONOVI","BILLS"],
                                                    ["../img_equipe/img_line_up/rl/joueur/rizzo.png","DILLON","RIZZO","RIZZO"]],
                                            coach : [["../img_equipe/img_line_up/rl/coach/jahzo.png","JACOB","JAHZO","SUDA"]]}]};


    return(
        <div>
            <div>
                <Header/>
            </div>
             {/* Line-Up  */}
            <div className="line_up">
                {/* Image officiel équipe - START */}
                <div className="row line_up">
                    <div id="img_line_up">
                        <img src={liste_jeux[jeu][0]["officiel"][0]} alt='texte' className='texte_line_up'/>
                        <img src={liste_jeux[jeu][0]["officiel"][1]} alt="line_up_lol" className="line_up"/>
                    </div>
                </div>
                {/* Image officiel équipe - END */}
                <h1 className="titre_line_up">NOTRE LINE-UP</h1>
                <h2 className="titre_line_up_joueurs">JOUEURS</h2>
                <hr className="hr_titre_line_up_joueurs"></hr>
                {/* Liste joueur - START */}
                <div className="box_line_up" >
                <div className="row line_up_joueurs">
                    <div className="col s4">
                        <Link to={`/line_up/joueur/${liste_jeux[jeu][0]["joueurs"][0][2].toLowerCase()}`}>
                            <img src={liste_jeux[jeu][0]["joueurs"][0][0]} alt="photo_joueur" className="joueur"/>
                            <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["joueurs"][0][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["joueurs"][0][2]}''</span><br></br>{liste_jeux[jeu][0]["joueurs"][0][3]}</h3>
                        </Link>
                    </div>
                    <div className="col s4">
                        <Link to={`/line_up/joueur/${liste_jeux[jeu][0]["joueurs"][1][2].toLowerCase()}`}>
                            <img src={liste_jeux[jeu][0]["joueurs"][1][0]} alt="photo_joueur" className="joueur"/>
                            <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["joueurs"][1][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["joueurs"][1][2]}''</span><br></br>{liste_jeux[jeu][0]["joueurs"][1][3]}</h3>
                        </Link>
                    </div>
                    <div className="col s4">
                        <Link to={`/line_up/joueur/${liste_jeux[jeu][0]["joueurs"][2][2].toLowerCase()}`}>
                            <img src={liste_jeux[jeu][0]["joueurs"][2][0]} alt="photo_joueur" className="joueur"/>
                            <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["joueurs"][2][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["joueurs"][2][2]}''</span><br></br>{liste_jeux[jeu][0]["joueurs"][2][3]}</h3>
                        </Link>
                    </div>
                </div>
                </div>
                {liste_jeux[jeu][0]["joueurs"].length > 3 &&
                <div className="box_line_up" >
                <div className="row line_up_joueurs2">
                    <div className="col s6">
                        <Link to={`/line_up/joueur/${liste_jeux[jeu][0]["joueurs"][3][2].toLowerCase()}`}>
                            <img src={liste_jeux[jeu][0]["joueurs"][3][0]} alt="photo_joueur" className="joueur2"/>
                            <h3 className="nom_pseudo_prenom_joueur2">{liste_jeux[jeu][0]["joueurs"][3][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["joueurs"][3][2]}''</span><br></br>{liste_jeux[jeu][0]["joueurs"][3][3]}</h3>
                        </Link>
                    </div>
                    <div className="col s6">
                        <Link to={`/line_up/joueur/${liste_jeux[jeu][0]["joueurs"][4][2].toLowerCase()}`}>
                            <img src={liste_jeux[jeu][0]["joueurs"][4][0]} alt="photo_joueur" className="joueur2"/>
                            <h3 className="nom_pseudo_prenom_joueur2">{liste_jeux[jeu][0]["joueurs"][4][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["joueurs"][4][2]}''</span><br></br>{liste_jeux[jeu][0]["joueurs"][4][3]}</h3>
                        </Link>
                    </div>
                </div>
                </div>}
                {/* Liste joueur - END */}
                <h2 className="titre_line_up_coach">COACH</h2>
                <hr className="hr_titre_line_up_coach"></hr>
                {/* Liste coach - START */}
                <div className="box_line_up" >
                <div className="row line_up_joueurs">
                    <div className="col s4">
                        <img src={liste_jeux[jeu][0]["coach"][0][0]} alt="photo_joueur" className="joueur"/>
                        <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["coach"][0][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["coach"][0][2]}''</span><br></br>{liste_jeux[jeu][0]["coach"][0][3]}</h3>
                    </div>
                    {liste_jeux[jeu][0]["coach"].length >1 && 
                    <div className="col s4" id="invisible">
                        <img src={liste_jeux[jeu][0]["coach"][1][0]} alt="photo_joueur" className="joueur"/>
                        <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["coach"][1][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["coach"][1][2]}''</span><br></br>{liste_jeux[jeu][0]["coach"][1][3]}</h3>
                    </div>}
                    {liste_jeux[jeu][0]["coach"].length <=1 && 
                    <div className="col s4" id="invisible"></div>}
                    {liste_jeux[jeu][0]["coach"].length >2 && 
                    <div className="col s4">
                        <img src={liste_jeux[jeu][0]["coach"][2][0]} alt="photo_joueur" className="joueur"/>
                        <h3 className="nom_pseudo_prenom_joueur">{liste_jeux[jeu][0]["coach"][2][1]}<br></br><span className="pseudo">''{liste_jeux[jeu][0]["coach"][2][2]}''</span><br></br>{liste_jeux[jeu][0]["coach"][2][3]}</h3>
                    </div>}
                </div>
                </div>
                {/* Liste joueur - END */}
            </div>
            <hr></hr>
            <div className="line_up_footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Line_Up;