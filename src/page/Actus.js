import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Actus() {
    return(
        <div>
            {/* Navbar */}
             <Header />

            {/* ACTUALITEES */}
            <div>
                <h2 className="h2_actu">Actualitées</h2>
                <div className="div_actus ">
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                    <figure>
                        <Link to="/article">
                            <img src="./img/esport.jpg"
                            alt="Esport" className="img_esport"/>
                            <figcaption className="fig_article">La rentabilité dans l'esport</figcaption>
                        </Link>
                    </figure> 
                </div>
                <div className="container">
                    <ul id="pagination">
                        <li><a href="#!"><span>1</span></a></li>
                        <li><a href="#!"><span>2</span></a></li>
                        <li><a href="#!"><span>3</span></a></li>
                        <li><a href="#!"><span>4</span></a></li>
                        <li><a href="#!"><span>5</span></a></li>
                    </ul>
                </div>
             <hr/>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Actus 