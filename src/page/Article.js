import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Article(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="div_article">
                <img src="./img/esport2.png"
                alt="Esport" className="img_article"/>
            </div>
            <div className="container">
                <h2 className="h2_article container"> LA RENTABILITE DE L'ESPORT</h2>
            </div>
            <div className="p_article container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid dicta ipsum praesentium ad reiciendis debitis non! Sed error, consequatur accusantium autem quam numquam asperiores architecto eaque magnam! Velit ducimus placeat, rerum neque molestias soluta sint dolorem perferendis animi voluptate consequuntur id quam. Iste, repellendus quos accusamus praesentium earum unde adipisci eligendi ducimus quis tenetur nesciunt atque porro rem officia at. Consequuntur expedita aliquam voluptatum sequi quo, quae facere rem sunt esse repellendus. Suscipit, nihil. Sapiente iusto rem architecto et doloribus in ullam ipsum. Corrupti, repudiandae optio ea, itaque dignissimos fuga libero maxime quisquam architecto illum dolores. Mollitia harum tempore adipisci facilis placeat voluptatum, quasi quod quibusdam cupiditate, numquam ratione, ducimus ipsum. Quaerat vero iure nesciunt provident explicabo aut, sit inventore dolorum, atque consectetur dolor doloremque deleniti similique eos maxime enim cupiditate! Rem laboriosam, numquam asperiores iure reprehenderit tenetur! Nisi eveniet quasi debitis rem provident, ullam cum praesentium nobis magni qui a molestiae eum esse temporibus omnis saepe ab odit reprehenderit quia delectus! Dolor quod ad blanditiis architecto delectus. Dolore, totam modi.</p>
            </div>
            <hr/>
            <Footer />
        </div>
    );
}

export default Article