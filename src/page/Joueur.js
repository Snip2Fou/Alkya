import { Link, useParams } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Joueur(){

    // Récupère pseudo du joueur
    let {pseudo} = useParams();
    // Liste des information sur les joueurs
    const liste_joueur = {whiteinn : [{info : ["/img_equipe/img_line_up/lol/joueur/whiteinn_profil.png","ALEXANDRU","WHITEINN","KOLOZSVARI","3 OCTOBRE 2000", "BUCAREST, ROUMANIE","/img_equipe/img_drapeau/drapeau_roumain.png","1M77", "71KG","JANVIER 2023","LEAGUE OF LEGENDS"],
                                    parcours : ["/img_equipe/img_logo_team/Cream_Real_Betis_logo.webp","2021-2021","/img_equipe/img_logo_team/Team_Heretics_logo.webp","2022-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["Superliga","/img_equipe/img_palmares/SL_logo.png","Aout 2022","European Masters","/img_equipe/img_palmares/EUM_logo.png","Septembre 2022"],
                                    carriere : ["/img_equipe/img_line_up/lol/joueur/whiteinn_carriere.jpg"],
                                    reseau : ["https://twitter.com/Whitein15","","","https://lolpros.gg/player/whiteinn","/img_equipe/img_logo/logo_lol.png"]}],
                       
                        cabochard : [{info : ["/img_equipe/img_line_up/lol/joueur/cabochard_profil.png","LUCAS","CABOCHARD","SIMON MESLET","15 AVRIL 1997", "CUVILLERS, FRANCE","/img_equipe/img_drapeau/drapeau_francais.png","1M85", "84KG","MAI 2021","LEAGUE OF LEGENDS"],
                                    parcours : ["/img_equipe/img_logo_team/gambit_logo.png","2014-2015","/img_equipe/img_logo_team/Vitality_logo.png","2015-2020","/img_equipe/img_logo_team/alkya_logo.png","2021"],
                                    palmares : ["IEM Season 9","/img_equipe/img_palmares/ESL_logo.png","Decembre 2014","European Masters","/img_equipe/img_palmares/EUM_logo.png","Octobre 2021","European Masters","/img_equipe/img_palmares/EUM_logo.png","Mai 2022"],
                                    carriere : ["/img_equipe/img_line_up/lol/joueur/cabochard_carriere.jpg"],
                                    reseau : ["https://twitter.com/CabochardLoL","https://www.instagram.com/cabochardlol/?hl=fr","twitch.tv/Cabochardlol","https://lolpros.gg/player/cabochard","/img_equipe/img_logo/logo_lol.png"]}],   
                        
                        kaori : [{info : ["/img_equipe/img_line_up/lol/joueur/kaori_profil.png","MUHAMMED","KAORI","SENTURK","9 JUILLET 2001", "KONYA, TURQUIE","/img_equipe/img_drapeau/drapeau_turque.png","1M76", "79KG","JANVIER 2023","LEAGUE OF LEGENDS"],
                                    parcours : ["/img_equipe/img_logo_team/SMB_logo.png","2021-2021","/img_equipe/img_logo_team/Eg_logo.png","2021-2022","/img_equipe/img_logo_team/alkya_logo.png","2023"],
                                    palmares : ["TCL 2020 Summer","/img_equipe/img_palmares/TCL_logo.webp","Aout 2020","TCL 2021 Winter","/img_equipe/img_palmares/TCL_logo.webp","Mars 2021"],
                                    carriere : ["/img_equipe/img_line_up/lol/joueur/kaori_carriere.jpg"],
                                    reseau : ["https://twitter.com/KaoriLoL","instagram.com/kaorilol333/","https://www.twitch.tv/kaori123","https://lolpros.gg/player/kaori/","/img_equipe/img_logo/logo_lol.png"]}],
                        
                        saken : [{info : ["/img_equipe/img_line_up/lol/joueur/saken_profil.png","LUCAS","SAKEN","FAYARD","5 NOVEMBRE 1998", "LILLE, FRANCE","/img_equipe/img_drapeau/drapeau_francais.png","1M67", "64KG","DECEMBRE 2020","LEAGUE OF LEGENDS"],
                                    parcours : ["/img_equipe/img_logo_team/gentside_logo.png","2017-2019","/img_equipe/img_logo_team/Vitality_logo.png","2019-2020","/img_equipe/img_logo_team/alkya_logo.png","2020"],
                                    palmares : ["LFL 2020 Finals","/img_equipe/img_palmares/LFL_Logo.webp","Octobre 2020","EM 2021 Spring Main Event","/img_equipe/img_palmares/EUM_logo.png","Mai 2021","EM 2022 Spring Main Event","/img_equipe/img_palmares/EUM_logo.png","Mai 2022"],
                                    carriere : ["/img_equipe/img_line_up/lol/joueur/saken_carriere.jpg"],
                                    reseau : ["https://twitter.com/Saken_lol","https://www.instagram.com/kc_saken/","https://www.twitch.tv/saken_lol","https://lolpros.gg/player/saken","/img_equipe/img_logo/logo_lol.png"]}],
                                    
                        skeanz : [{info : ["/img_equipe/img_line_up/lol/joueur/skeanz_profil.png","DUNCAN","SKEANZ","MARQUET","25 SEPTEMBRE 2000", "PARIS, FRANCE","/img_equipe/img_drapeau/drapeau_francais.png","1M71", "67KG","JANVIER 2023","LEAGUE OF LEGENDS"],
                                    parcours : ["/img_equipe/img_logo_team/solary_logo.png","2018-2019","/img_equipe/img_logo_team/Vitality_logo.png","2019-2022","/img_equipe/img_logo_team/alkya_logo.png","2023"],
                                    palmares : ["Coupe de France","/img_equipe/img_palmares/Coupe_de_France_logo.webp","Novembre 2022"],
                                    carriere : ["/img_equipe/img_line_up/lol/joueur/skeanz_carriere.jpg"],
                                    reseau : ["https://twitter.com/Skeanz_lol","https://www.instagram.com/duncan_marquet/","https://www.twitch.tv/skeanz","https://lolpros.gg/player/skeanz","/img_equipe/img_logo/logo_lol.png"]}],

                        cender : [{info : ["/img_equipe/img_line_up/valorant/joueur/cender_profil.png","JOKUBAS","CENDER","LABUTIS","30 OCTOBRE 2001", "VILNIUS, LITUANIE","/img_equipe/img_drapeau/drapeau_lituanie.png","1M68", "92KG","FEVRIER 2021","VALORANT"],
                                    parcours : ["/img_equipe/img_logo_team/Alltheragelogo.png","2020-2020","/img_equipe/img_logo_team/exile_esport_logo.png","2020-2021","/img_equipe/img_logo_team/alkya_logo.png","2021"],
                                    palmares : ["VALORANT Open Tour","/img_equipe/img_palmares/Valorant_open_tour_logo.png","Novembre 2021","VCT 2022","/img_equipe/img_palmares/Valorant_champion_tour_logo.png","Janvier 2022", "VRL 2022","/img_equipe/img_palmares/VRL_logo.png","Juillet 2022"],
                                    carriere : ["/img_equipe/img_line_up/valorant/joueur/cender_carriere.jpg"],
                                    reseau : ["https://twitter.com/ceNder1337","https://www.instagram.com/cender1337/","https://www.twitch.tv/cender1337","","/img_equipe/img_logo/logo_valo.jpg"]}],
                        
                        bonecold : [{info : ["/img_equipe/img_line_up/valorant/joueur/bonecold_profil.png","SANTERI","BONECOLD","SASSI","13 OCTOBRE 1998", "TURKU, FINLANDE","/img_equipe/img_drapeau/drapeau_finlande.png","1M78", "72KG","MAI 2022","VALORANT"],
                                    parcours : ["/img_equipe/img_logo_team/RYEG_logo.png","2021-2021","/img_equipe/img_logo_team/Acend_logo.png","2021-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["VCT 2021","/img_equipe/img_palmares/Valorant_champion_tour_logo.png","Juillet 2021","LVP","/img_equipe/img_palmares/LVP_logo.png","Novembre 2021", "Valorant Champion 2021","/img_equipe/img_palmares/Valorant_champions_logo.png","Décembre"],
                                    carriere : ["/img_equipe/img_line_up/valorant/joueur/bonecold_carriere.jpg"],
                                    reseau : ["https://twitter.com/BonecoldVAL","","twitch.tv/bonecoldval","","/img_equipe/img_logo/logo_valo.jpg"]}],
                            
                        molsi : [{info : ["/img_equipe/img_line_up/valorant/joueur/molsi_profil.png","MICHAL","MOLSI","LACKI","26 JANVIER 1997", "VARSOVIE, POLOGNE","/img_equipe/img_drapeau/drapeau_pologne.png","1M82", "80KG","NOVEMBRE 2022","VALORANT"],
                                    parcours : ["/img_equipe/img_logo_team/Giants_logo.png","2021-2021","/img_equipe/img_logo_team/OG_logo.png","2022-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["LVP","/img_equipe/img_palmares/LVP_logo.png","Octobre 2021"],
                                    carriere : ["/img_equipe/img_line_up/valorant/joueur/molsi_carriere.jpg"],
                                    reseau : ["https://twitter.com/molsiVAL","","https://www.twitch.tv/molsi","","/img_equipe/img_logo/logo_valo.jpg"]}],
                                  
                        destrian : [{info : ["/img_equipe/img_line_up/valorant/joueur/destrian_profil.png","TOMAS","DESTRIAN","LINIKAS","28 MAI 1999", "KAUNAS, LITUANIE","/img_equipe/img_drapeau/drapeau_lituanie.png","1M85", "77KG","NOVEMBRE 2022","VALORANT"],
                                    parcours : ["/img_equipe/img_logo_team/OG_logo.png","2021-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["LVP","/img_equipe/img_palmares/LVP_logo.png","Octobre 2021"],
                                    carriere : ["/img_equipe/img_line_up/valorant/joueur/destrian_carriere.jpg"],
                                    reseau : ["https://twitter.com/DestrianVAL","","","","/img_equipe/img_logo/logo_valo.jpg"]}],    
                                
                        twisten : [{info : ["/img_equipe/img_line_up/valorant/joueur/twisten_profil.png","KAREL","TWISTEN","ASENBRENER","4 DECEMBRE 2003", "PRAGUE, TCHEQUIE","/img_equipe/img_drapeau/drapeau_tchequie.png","1M83", "76KG","NOVEMBRE 2022","VALORANT"],
                                    parcours : ["/img_equipe/img_logo_team/BIG_logo.png","2021-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : [],
                                    carriere : ["/img_equipe/img_line_up/valorant/joueur/twisten_carriere.jpg"],
                                    reseau : ["https://twitter.com/TwistenVAL","","https://www.twitch.tv/twisten1k","","/img_equipe/img_logo/logo_valo.jpg"]}],
                                    
                        hicks : [{info : ["/img_equipe/img_line_up/r6/joueur/hicks_profil.png","THEOPHILE","HICKS","DUPONT","5 AVRIL 1994", "LYON, FRANCE","/img_equipe/img_drapeau/drapeau_francais.png","1M78", "69KG","JANVIER 2021","RAINBOX SIX SIEGE"],
                                    parcours : ["/img_equipe/img_logo_team/Giants_logo.png","2019-2020","/img_equipe/img_logo_team/Rogue_logo.png","2020-2020","/img_equipe/img_logo_team/alkya_logo.png","2021"],
                                    palmares : ["6 French League","/img_equipe/img_palmares/6_French_League_logo.png","Novembre 2019","Pro League","/img_equipe/img_palmares/r6_pro_league_logo.png","Avril 2020"],
                                    carriere : ["/img_equipe/img_line_up/r6/joueur/hicks_carriere.jpg"],
                                    reseau : ["https://twitter.com/Hicks_YZ","","https://www.twitch.tv/Hicks_YZ","https://www.faceit.com/en/players/Hicks92","/img_equipe/img_logo/logo_raimbowsix.jpg"]}],
                          
                        risze : [{info : ["/img_equipe/img_line_up/r6/joueur/risze_profil.png","VALENTIN","RISZE","LIRADELFO","13 OCTOBRE 1992", "BRUXELLE, BELGIQUE","/img_equipe/img_drapeau/drapeau_belge.png","1M80", "70KG","MAI 2022","RAINBOX SIX SIEGE"],
                                    parcours : ["/img_equipe/img_logo_team/Rogue_logo.png","2020-2020","/img_equipe/img_logo_team/Vitality_logo.png","2020-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["6 French League","/img_equipe/img_palmares/6_French_League_logo.png","Novembre 2019","Pro League","/img_equipe/img_palmares/r6_pro_league_logo.png","Avril 2020","European League","/img_equipe/img_palmares/European_League.png","OCTOBRE 2022"],
                                    carriere : ["/img_equipe/img_line_up/r6/joueur/risze_carriere.jpg"],
                                    reseau : ["https://twitter.com/risze_lel","https://www.instagram.com/risze_lel/","https://www.twitch.tv/risze92","https://www.twitch.tv/risze92","/img_equipe/img_logo/logo_raimbowsix.jpg"]}],  
                        
                        alphama : [{info : ["/img_equipe/img_line_up/r6/joueur/alphama_profil.png","LEO","ALPHAMA","ROBINE","29 MAI 2000", "TOULOUSE, FRANCE","/img_equipe/img_drapeau/drapeau_francais.png","1M77", "68KG","JANVIER 2021","RAINBOX SIX SIEGE"],
                                    parcours : ["/img_equipe/img_logo_team/Lestream_logo.png","2018-2019","/img_equipe/img_logo_team/Giants_logo.png","2019-2020","/img_equipe/img_logo_team/alkya_logo.png","2021"],
                                    palmares : ["6 French League","/img_equipe/img_palmares/6_French_League_logo.png","Novembre 2019"],
                                    carriere : ["/img_equipe/img_line_up/r6/joueur/alphama_carriere.jpg"],
                                    reseau : ["https://twitter.com/Alphama_R6","","","https://www.faceit.com/en/players/Alphama","/img_equipe/img_logo/logo_raimbowsix.jpg"]}],  

                        aceez : [{info : ["/img_equipe/img_line_up/r6/joueur/aceez_profil.png","MAURICE","ACEEZ","ERKELENZ","8 JANVIER 1997", "BERLIN, ALLEMAGNE","/img_equipe/img_drapeau/drapeau_allemand.png","1M71", "84KG","MARS 2022","RAINBOX SIX SIEGE"],
                                    parcours : ["/img_equipe/img_logo_team/Giants_logo.png","2019-2020","/img_equipe/img_logo_team/Rogue_logo.png","2020-2022","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["6 French League","/img_equipe/img_palmares/6_French_League_logo.png","Novembre 2019","Pro League","/img_equipe/img_palmares/r6_pro_league_logo.png","Avril 2020","European League","/img_equipe/img_palmares/European_League.png","JUILLET 2020"],
                                    carriere : ["/img_equipe/img_line_up/r6/joueur/aceez_carriere.jpg"],
                                    reseau : ["https://twitter.com/AceeZ","","https://www.twitch.tv/AceeZ","https://www.faceit.com/en/players/AceeZz","/img_equipe/img_logo/logo_raimbowsix.jpg"]}], 
                        
                        korey : [{info : ["/img_equipe/img_line_up/r6/joueur/korey_profil.png","LUKAS","KOREY","ZWINGMANN","28 DECEMBRE 1999", "BERLIN, ALLEMAGNE","/img_equipe/img_drapeau/drapeau_allemand.png","1M73","66KG","MARS 2022","RAINBOX SIX SIEGE"],
                                    parcours : ["/img_equipe/img_logo_team/Giants_logo.png","2019-2020","/img_equipe/img_logo_team/Rogue_logo.png","2020-2021","/img_equipe/img_logo_team/alkya_logo.png","2022"],
                                    palmares : ["6 French League","/img_equipe/img_palmares/6_French_League_logo.png","Novembre 2019","Pro League","/img_equipe/img_palmares/r6_pro_league_logo.png","Avril 2020","European League","/img_equipe/img_palmares/European_League.png","JUILLET 2020"],
                                    carriere : ["/img_equipe/img_line_up/r6/joueur/korey_carriere.jpg"],
                                    reseau : ["https://twitter.com/koreyr6s","https://www.instagram.com/uklas/","https://www.twitch.tv/korey","https://www.faceit.com/en/players/KQREY","/img_equipe/img_logo/logo_raimbowsix.jpg"]}], 
                         
                        jknaps : [{info : ["/img_equipe/img_line_up/rl/joueur/jknaps_profil.png","JACOB","JKNAPS","KNAPMAN","30 SEPTEMBRE 1999", "WASHINGTON DC, ETATS-UNIS","/img_equipe/img_drapeau/drapeau_americain.png","1M77","68KG","JANVIER 2020","ROCKET LEAGUE"],
                                    parcours : ["/img_equipe/img_logo_team/lucky_bounce_logo.png","2016-2017","/img_equipe/img_logo_team/g2_logo.png","2017-2019","/img_equipe/img_logo_team/alkya_logo.png","2020"],
                                    palmares : ["RLCS","/img_equipe/img_palmares/RLCS_logo.png","Avril 2018","RLCS","/img_equipe/img_palmares/RLCS_logo.png","Mars 2020","RLCS","/img_equipe/img_palmares/RLCS_logo.png","Mars 2022"],
                                    carriere : ["/img_equipe/img_line_up/rl/joueur/jknaps_carriere.jpg"],
                                    reseau : ["https://twitter.com/JKnaps","https://www.instagram.com/jknapsrl/","https://www.twitch.tv/jknapsrl","","/img_equipe/img_logo/logo_rocketleague.png"]}],  
                        
                        kronovi : [{info : ["/img_equipe/img_line_up/rl/joueur/kronovi_profil.png","CAMERON","KRONOVI","BILLS","30 AOUT 1997", "LOS ANGELES, ETATS-UNIS","/img_equipe/img_drapeau/drapeau_americain.png","1M79","67KG","JANVIER 2020","ROCKET LEAGUE"],
                                    parcours : ["/img_equipe/img_logo_team/g2_logo.png","2017-2019","/img_equipe/img_logo_team/Rogue_logo.png","2019-2020","/img_equipe/img_logo_team/alkya_logo.png","2020"],
                                    palmares : ["RLCS","/img_equipe/img_palmares/RLCS_logo.png","Aout 2016","RLCS","/img_equipe/img_palmares/RLCS_logo.png","Avril 2018"],
                                    carriere : ["/img_equipe/img_line_up/rl/joueur/kronovi_carriere.jpg"],
                                    reseau : ["https://twitter.com/kronovirl","https://www.instagram.com/kronovirl/","https://www.twitch.tv/kronovi","","/img_equipe/img_logo/logo_rocketleague.png"]}],  
                        
                        rizzo : [{info : ["/img_equipe/img_line_up/rl/joueur/rizzo_profil.png","DILLON","RIZZO","RIZZO","26 MAI 1997", "NEW-YORK, ETATS-UNIS","/img_equipe/img_drapeau/drapeau_americain.png","1M81","71KG","JANVIER 2021","ROCKET LEAGUE"],
                                    parcours : ["/img_equipe/img_logo_team/take_logo.png","2016-2017","/img_equipe/img_logo_team/g2_logo.png","2017-2021","/img_equipe/img_logo_team/alkya_logo.png","2021"],
                                    palmares : ["RLCS","/img_equipe/img_palmares/RLCS_logo.png","Avril 2018","RLCS","/img_equipe/img_palmares/RLCS_logo.png","Mars 2020"],
                                    carriere : ["/img_equipe/img_line_up/rl/joueur/kronovi_carriere.jpg"],
                                    reseau : ["https://twitter.com/kronovirl","https://www.instagram.com/kronovirl/","https://www.twitch.tv/kronovi","","/img_equipe/img_logo/logo_rocketleague.png"]}] 
                                };

    return(
        <div>
            <div>
                <Header/>
            </div>
             {/* Information sur les joueurs */}
            <div className="profil_joueur">
                {/* Profil joueur - START */}
                <div className="row info_joueur">
                    <div className="col s6">
                        <img src={liste_joueur[pseudo][0]["info"][0]} alt="img_profil_joueur" className="img_profil_joueur"/>
                    </div>
                    <div className="col s6">
                        <h3 className="nom_pseudo_prenom_joueur_profil">{liste_joueur[pseudo][0]["info"][1]}<span className="pseudo_profil"> ''{liste_joueur[pseudo][0]["info"][2]}'' </span><br></br>{liste_joueur[pseudo][0]["info"][3]}</h3>
                        <h6 className="naissance_joueur">NE LE {liste_joueur[pseudo][0]["info"][4]}</h6>
                        <h6 className="lieu_naissance_joueur">A {liste_joueur[pseudo][0]["info"][5]} <img src={liste_joueur[pseudo][0]["info"][6]} alt="drapeau_joueur_profil" className="drapeau_joueur_profil"/></h6>
                        <h6 className="taille_joueur">TAILLE {liste_joueur[pseudo][0]["info"][7]}</h6>
                        <h6 className="poids_joueur">POIDS {liste_joueur[pseudo][0]["info"][8]}</h6>
                        <h6 className="arrivee_club_joueur">ARRIVEE AU CLUB <span className="arrivee_club_joueur_date">{liste_joueur[pseudo][0]["info"][9]}</span></h6>
                        <h6 className="jeu_joueur">JEU <span className="jeu_joueur_marge">{liste_joueur[pseudo][0]["info"][10]}</span></h6>
                    </div>
                </div>
                {/* Profil joueur - END */}
                {/* Carriere joueur - START */}
                <div className="carriere_joueur" id="carriere_joueur">
                    <a href="#carriere_joueur">
                        <h3 className="expand_carriere"><i className="material-icons expands">expand_more</i>CARRIERE DU JOUEUR</h3>
                    </a>
                    <hr></hr>
                    <div className="row carriere">
                        <div className="col s8">
                            <h3 className="pseudo_joueur_carriere">''{liste_joueur[pseudo][0]["info"][2]}''<img src={liste_joueur[pseudo][0]["info"][6]} alt="drapeau_joueur_carriere" className="drapeau_joueur_carriere"/></h3>
                            <hr className="hr_pseudo_parcours_joueur"></hr>
                            {/* Parcours joueur - START */}
                            <div className="parcours_joueur">
                                <h5 className="titre_parcours_joueur">PARCOURS</h5>
                                <div className="row team_parcours_joueur">
                                    {liste_joueur[pseudo][0]["parcours"].length>0 &&
                                    <div className="col parcours">
                                        <img src={liste_joueur[pseudo][0]["parcours"][0]} alt="img_team_parcours" className="img_team_parcours"/>
                                        <h6 className="date_parcours">{liste_joueur[pseudo][0]["parcours"][1]}</h6>
                                    </div>}
                                    {liste_joueur[pseudo][0]["parcours"].length>2 &&
                                    <div className="col parcours">
                                        <i className="material-icons arrow">arrow_forward</i>
                                    </div>}
                                    {liste_joueur[pseudo][0]["parcours"].length>2 &&
                                    <div className="col parcours">
                                        <img src={liste_joueur[pseudo][0]["parcours"][2]} alt="img_team_parcours" className="img_team_parcours"/>
                                        <h6 className="date_parcours">{liste_joueur[pseudo][0]["parcours"][3]}</h6>
                                    </div>}
                                    {liste_joueur[pseudo][0]["parcours"].length>4 &&
                                    <div className="col parcours">
                                        <i className="material-icons arrow">arrow_forward</i>
                                    </div>}
                                    {liste_joueur[pseudo][0]["parcours"].length>4 &&
                                    <div className="col parcours">
                                        <img src={liste_joueur[pseudo][0]["parcours"][4]} alt="img_team_parcours" className="img_team_parcours"/>
                                        <h6 className="date_parcours">{liste_joueur[pseudo][0]["parcours"][5]}</h6>
                                    </div>}
                                </div>
                            </div>
                            {/* Parcours joueur - END */}
                            {/* Palamres joueur - START */}
                            <div className="palmares_joueur">
                                <h5 className="titre_palmares_joueur">PALMARES</h5>
                                <div className="row team_palmares_joueur">
                                    {liste_joueur[pseudo][0]["palmares"].length >1 &&
                                    <div className="col s4 palmares">
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][0]}</h6>
                                        <div className="center-align">
                                            <img src={liste_joueur[pseudo][0]["palmares"][1]} alt="img_team_palmares" className="img_team_palmares"/>
                                        </div>
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][2]}</h6>
                                    </div>}
                                    {liste_joueur[pseudo][0]["palmares"].length > 3 &&
                                    <div className="col s4 palmares">
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][3]}</h6>
                                        <div className="center-align">
                                            <img src={liste_joueur[pseudo][0]["palmares"][4]} alt="img_team_palmares" className="img_team_palmares"/>
                                        </div>
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][5]}</h6>
                                    </div>}
                                    {liste_joueur[pseudo][0]["palmares"].length > 6 &&
                                    <div className="col s4 palmares">
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][6]}</h6>
                                        <div className="center-align">
                                            <img src={liste_joueur[pseudo][0]["palmares"][7]} alt="img_team_palmares" className="img_team_palmares"/>
                                        </div>
                                        <h6 className="date_palmares">{liste_joueur[pseudo][0]["palmares"][8]}</h6>
                                    </div>}
                                </div>
                            </div>
                            {/* Palamres joueur - END */}
                        </div>
                        <div className="col s3">
                            <img src={liste_joueur[pseudo][0]["carriere"][0]} alt="img_carriere" className="img_carriere"/>
                        </div>
                    </div>
                </div>
                {/* Carriere joueur - END */}
                <hr className="hr_carriere_reseau"></hr>
                {/* Réseau joueur - START */}
                <div className="reseau_joueur">
                    <h1 className="titre_reseau_joueur">SES RESEAUX</h1>
                    <hr className="hr_reseau"></hr>
                    <div className="row reseau_joueur">
                        {liste_joueur[pseudo][0]["reseau"][0] != "" && 
                        <div className="col s3 reseau_joueur">
                            <div className="center-align">
                                <a href={liste_joueur[pseudo][0]["reseau"][0]}>
                                    <img src="/img_equipe/img_logo_reseau/logo_twitter.png" alt="logo_reseau" className="logo_twitter"/>
                                </a>
                            </div>
                        </div>}
                        {liste_joueur[pseudo][0]["reseau"][1] != "" && 
                        <div className="col s3 reseau_joueur">
                            <div className="center-align">
                                <a href={liste_joueur[pseudo][0]["reseau"][1]}>
                                    <img src="/img_equipe/img_logo_reseau/logo_insta.jpg" alt="logo_reseau" className="logo_insta"/>
                                </a>
                            </div>
                        </div>}
                        {liste_joueur[pseudo][0]["reseau"][2] != "" && 
                        <div className="col s3 reseau_joueur">
                            <div className="center-align">
                                <a href={liste_joueur[pseudo][0]["reseau"][2]}>
                                    <img src="/img_equipe/img_logo_reseau/logo_twitch.jpg" alt="logo_reseau" className="logo_twitch"/>
                                </a>
                            </div>
                        </div>}
                        {liste_joueur[pseudo][0]["reseau"][3] != "" && 
                        <div className="col s3 reseau_joueur">
                            <div className="center-align">
                                <a href={liste_joueur[pseudo][0]["reseau"][3]}>
                                    <img src={liste_joueur[pseudo][0]["reseau"][4]} alt="logo_reseau" className="logo_reseau"/>
                                </a>
                            </div>
                        </div>}
                    </div>
                </div>
                {/* Réseau joueur - END */}
                <hr className="hr_reseau_boutique"></hr>
                {/* Boutique joueur - START */}
                <div className="boutique_joueur">
                    <a href="">
                        <h1 className="titre_boutique_joueur">BOUTIQUE</h1>
                    </a>
                    <hr className="hr_boutique"></hr>
                    <div className="row boutique_joueur">
                        <div className="col s4 element_boutique_joueur">
                            <div className="center-align">
                                <div className="box_element_boutique">
                                    <Link to="https://62d50f.myshopify.com/products/survetement-alkya">
                                        <img src="/img/survetement_alkya.jpg" alt="element_boutique" className="img_element_boutique"/>
                                        <h6 className="titre_element_boutique_joueur">SURVÊTEMENTS ALKYA</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col s4 element_boutique_joueur">
                            <div className="center-align">
                                <div className="box_element_boutique">
                                    <Link to="https://62d50f.myshopify.com/products/maillot-officiel-2022">
                                        <img src="/img/maillot_pro_alkya.jpg" alt="element_boutique" className="img_element_boutique"/>
                                        <h6 className="titre_element_boutique_joueur2">MAILLOT OFFICIEL 2022 {liste_joueur[pseudo][0]["info"][2]}</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col s4 element_boutique_joueur">
                            <div className="center-align">
                                <div className="box_element_boutique">
                                    <Link to="https://62d50f.myshopify.com/products/casquette">
                                        <img src="/img/casquette_alkya.jpg" alt="element_boutique" className="img_element_boutique"/>
                                        <h6 className="titre_element_boutique_joueur">CASQUETTE</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Boutique joueur - START */}
                <hr className="hr_boutique_footer"></hr>
            </div>
            <div className="line_up_footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Joueur;