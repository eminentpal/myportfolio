import React from "react";

const Body = () => {
  //portfolio, services, contact-me, about-text

  return (
    <>
      {/* <!--About Section--> */}
      <div>
        <div class="about-container" id="about">
          <img src="images/me.png" alt="about" />
          {/* <!--img--> */}

          {/* <!--about text--> */}

          <div className="about-text">
            <p> About Me</p>
            <p>Software Developer</p>
            <p>
              A hardworking Softtware developer (Frontend) with over 3yrs
              experience in webapps development. With skills in HTML, CSS,
              Material Ui, Boostrap, MongoDB and Javascript (ReactJs, NextJs).
              Also have good experience using backend framework, Nodejs.{" "}
            </p>
            <p>
              I love challenges, working with details, finding solution with
              great zeal to learn new technology and adapt to any working
              environment I find myself. I have worked on a number of projects
              which you can see as you scroll down.{" "}
            </p>

            {/* <!--Button--> */}
            <a href="https://wa.me/2348140035918">
              {" "}
              <button style={{ fontWeight: "bold", fontSize: "12px" }}>
                Hire Me
              </button>{" "}
            </a>
            <button style={{ fontWeight: "bold", fontSize: "12px" }}>
              Download CV
            </button>
          </div>
        </div>

        {/* <!--Seervices--> */}
        <div class="services" id="services">
          <div class="services-text">
            <p>Services</p>
            <p>Services Rendered</p>
            <p>
              If you want to make a professional website for your business, you
              can contact me. I make as soon as possible. I will give you the
              best service you cant get anywhere and I am very afforable.
            </p>
          </div>
          {/* <!--box--> */}
          <div class="box-container">
            {/* <!--box 1--> */}
            <div class="box-1 box-1Main ">
              <span>1</span>
              <p class="heading">Website Design</p>
              <p class="details">
                If you are looking for a creative website designer, then you are
                at the right place. I offer excellent website design services.
              </p>
              {/* <button> Read More</button> */}
            </div>
            {/* <!--box 2--> */}
            <div class="box-2">
              <span>2</span>
              <p class="heading">WebApps Development</p>
              <p class="details">
                {" "}
                If you want to make a website or WebApps for your business
                contact me as soon as possible. I will create a fully functional
                stand-alone web application for you.
              </p>
              {/* <button> Read More</button> */}
            </div>
            {/* <!--box 3--> */}
            <div class="box-3">
              <span>3</span>
              <p class="heading">IT Consultation</p>
              <p class="details">
                I also offer expert advice on any issue you are facing which is
                related to IT. Based on my many years of experience in IT, i can
                offer you a good professional IT consulation service.
              </p>
              {/* <button> Read More</button> */}
            </div>
          </div>
        </div>

        {/* portfolio  */}

        <div class="services" id="portfolio">
          <div class="services-text">
            <p>Portfolio</p>
            <p>WebApps Created</p>
            <p>
              This is a list of some web applications which i have created, you
              can view them to see their design and functionality.
            </p>
          </div>
          {/* <!--box--> */}
          <div class="box-container">
            {/* <div class=" box-1 porfolio-1">
            <img   src="images/eminentwears.png" />
            
             <p class="heading" >EminentWears Store</p>
             <p class="details" > EminentWears Store is a webapp book and clothing store. It has most of the
             functionality of an eCommerce store. Its mobile responsive and has user and admin dashboard. </p>
             <a href='http://eminentwearstest.herokuapp.com/'> <button>View Site</button> </a>
            
         </div> */}

            {/* <div class=" box-1 porfolio-1">
            <img   src="images/mytodolistapp.png" />
             <p class="heading" >TodoList App</p>
             <p class="details" > This is a mobile responsive todo list webb app. Users can create a simple list of things they would like
             to do. <br /> <br /> <br /> </p>
             <a href='https://mytodolistap.herokuapp.com/'> <button>View Site</button> </a>
         </div> */}

            {/* <div class=" box-1 porfolio-1">
            <img   src="images/eminentbooks.png" />
             <p class="heading" >EminentBooks Store</p>
             <p class="details" > EminentBooks Store is a webapp ebook store. It has few of the
             functionality of an eCommerce store. Its mobile responsive. <br />  <br />  <br /></p>
             <a href='https://eminentbooks.herokuapp.com/'> <button>View Site</button> </a>
         </div> */}

            <div class="portfolio1">
              {/* <img   src="images/eminentwears.png" /> */}
              <div className="showDiv">
                <h3>EminentWears Store</h3>
                <p>
                  {" "}
                  EminentWears Store is a ReactJs webapp book and clothing
                  store. It has most of the functionality of an eCommerce store.
                  Its mobile responsive and has user and admin dashboard.{" "}
                </p>
                <a href="http://eminentwearstest.herokuapp.com/">
                  {" "}
                  <button>View Site</button>{" "}
                </a>
              </div>
            </div>

            <div class="portfolio2">
              {/* <img   src="images/eminentwears.png" /> */}
              <div className="showDiv">
                <h3>TodoList App</h3>
                <p>
                  {" "}
                  This is a mobile responsive todo list webb app. Users can
                  create a simple list of things they would like to do.{" "}
                </p>
                <a href="https://mytodolistap.herokuapp.com/">
                  {" "}
                  <button>View Site</button>{" "}
                </a>
              </div>
            </div>

            <div class="portfolio3">
              {/* <img   src="images/eminentwears.png" /> */}
              <div className="showDiv">
                <h3>EminentBooks Store</h3>
                <p>
                  {" "}
                  EminentBooks Store is a ReactJs webapp ebook store. It has few
                  of the functionality of an eCommerce store. Its mobile
                  responsive.
                </p>
                <a href="https://eminentbooks.herokuapp.com/">
                  {" "}
                  <button>View Site</button>{" "}
                </a>
              </div>
            </div>

            <div class="portfolio4">
              <div className="showDiv">
                <h3>Shortly Url Shortner</h3>
                <p>
                  {" "}
                  Shortly is a url shortner. It was made with Nextjs and its a
                  fullstack webapp. It helps to quickly shorten long url.
                </p>
                <a href="https://shutly.vercel.com/">
                  {" "}
                  <button>View Site</button>{" "}
                </a>
              </div>
            </div>

            {/* <!--box 2--> */}

            {/* <div class="box-2">
            
             <p class="heading" >EminentBooks Store</p>
             <p class="details" > EminentBooks Store is a webapp book and clothing store. It has most of the
             functionality of an eCommerce store. Its mobile responsive and has user and admin dashboard. </p>
             <button>View Site</button>
         </div>
        
         <div class="box-3">
           
             <p class="heading" >EminentBooks Store</p>
             <p class="details" > EminentBooks Store is a webapp book and clothing store. It has most of the
             functionality of an eCommerce store. Its mobile responsive and has user and admin dashboard. </p>
             <button>View Site</button>
         </div> */}
          </div>
        </div>

        {/* <!--contact me--> */}
        <div class="contact-me" id="contact">
          <p class="contact-mee"> You Have Any Project In Your Mind ?</p>
          <a href="https://wa.me/2348140035918">
            <button> Contact Me</button>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Body;
