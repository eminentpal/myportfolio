import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from "./Header"

const Home = () => {
    return (
        <>
           <section  className="contact">
           <Header />
              <div  className="text-container" >
                <p> Hello,</p>
                <p> I'm Ezie .C,</p>
                <p> I am a FrontEnd Developer, <br /> Blogger & Digital Marketer.</p>
                <button class="hire-btn">Hire Me</button>
                <button class="down-cv"> Download CV</button>
                </div>
                <img  src="images/model.png" class="model" alt="model" />
              

           </section> 
           <Body />
           <Footer />
        </>
    )
}

export default Home






