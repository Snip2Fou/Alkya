import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Aboutus  ()  {
  let { id } = useParams();

  return (
    <div>
      <div className="aboutus flow-text">
        

          <Header />

        <div className="p_about col s12 m4 l8 container">
          <h2 className="h2_about">Qu'est ce que Alkya</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, excepturi. Aliquam illo illum vitae, ducimus ratione itaque quae modi tempore quos hic soluta pariatur, quaerat impedit inventore blanditiis consequatur? Consequatur porro dignissimos id consectetur explicabo a tempora corporis harum dolores voluptatibus ullam delectus qui nam voluptas non, quaerat minus nostrum quibusdam et reiciendis illo facilis ex, dolorum ipsa? Consequuntur labore ullam illo rerum modi laudantium error voluptate, ab repellat voluptatem perspiciatis id amet exercitationem esse, dolore, cum vitae placeat nobis aliquid quod excepturi sit mollitia! Enim obcaecati optio neque accusamus necessitatibus pariatur dignissimos, veritatis, iusto provident eos quae commodi atque beatae, recusandae quam dolorum quas rem expedita dolore. Molestias vero perspiciatis debitis cumque temporibus necessitatibus, ipsa unde maxime id quas recusandae eveniet nihil! Dolorem, aliquid ipsa.
          </p>
    
          <h2 className="h2_about">POURQUOI ALKYA ?</h2>
          <div className="row icons_about">
            <i class="material-icons about">contact_mail</i>
            <i class="material-icons about">share</i>
          </div>
          
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio corporis molestias corrupti nulla sint vel, harum porro ipsa ullam cupiditate in nobis molestiae aliquid sit, nostrum quos perspiciatis expedita, voluptates laboriosam suscipit commodi inventore at officiis. Omnis rem nihil tempore odio perferendis atque eum ea necessitatibus? Iure cum beatae eveniet magni amet optio sapiente quod consequuntur sequi quas similique eius, aperiam ad blanditiis? Reiciendis quasi, sequi minima aut neque possimus beatae blanditiis totam eum veniam amet nihil deleniti dignissimos fugit accusamus quisquam quibusdam ex harum. Perferendis accusantium iure magni minus, natus nobis hic vero! Tempore rerum consectetur non quasi! Optio eveniet asperiores cum veniam necessitatibus? Minima dolore neque dolorem inventore vitae? Rem rerum sunt ipsa nisi laudantium, quasi numquam quisquam, modi sequi facere a labore aperiam.
          </p>
          <h2 className="h2_about">STAFF</h2>
          
        </div>
        <div>
          <div className="div_about-logo">
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="CEO"
                className="img_about"/>
              <figcaption className="fig_about">CEO</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="CEO"
                className="img_about"/>
              <figcaption className="fig_about">Pas le CEO</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="Pas le CEO"
                className="img_about"/>
              <figcaption className="fig_about">Chef de projet</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="Chef de projet"
                className="img_about"/>
              <figcaption className="fig_about">Marketing</figcaption>
            </figure>
          </div>

          <div className="div_about-logo">
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="Marketing"
                className="img_about"/>
              <figcaption className="fig_about">CEO</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="CEO"
                className="img_about"/>
              <figcaption className="fig_about">Pas le CEO</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="Pas le CEO"
                className="img_about"/>
              <figcaption className="fig_about">Chef de projet</figcaption>
            </figure>
            <figure className="col s3 l3">
              <img
                src="./img/random_guy.png"
                alt="Marketing"
                className="img_about"/>
              <figcaption className="fig_about">Marketing</figcaption>
            </figure>
          </div>

        </div>
      </div>

        <Footer/>

    </div>


  );
};

export default Aboutus;
