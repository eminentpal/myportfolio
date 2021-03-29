import React from 'react'

const Body = () => {
    return (
        <>
            {/* <!--About Section--> */}
            <div class="about-container" > 
            <img src="images/about-img.png" alt="" />
              {/* <!--img--> */}

              {/* <!--about text--> */}

    <div className="about-text">
        <p> About Me</p>
        <p>Developer & Designer</p>
        <p>Use our software developer CV tips and example for inspiration. ..
            . a great CV and landing your dream job, we've put together our top tips and a free template for inspiration. .
            .. Present your ambitions in the personal statement </p>
            <p>Check out these great examples of personal blogs, portfolios,
                 demos, and ... asked to 
                submit a resume and cover letter, or maybe your LinkedIn profile</p>
     
                {/* <!--Button--> */}
                <button>Hire Me</button>
                <button>Download CV</button>
    </div>

    </div>

{/* <!--Seervices--> */}
  <div class="services">
     <div class="services-text">
       <p>Services</p>
       <p>Services Required</p>
       <p>If you want to make a professional website for your business
           contact me. I make as soon as possible. You really like my
           work. I will give you the best service you cant get anywhere.
           I am very afforable.
       </p>

     </div>
       {/* <!--box--> */}
       <div class="box-container">
        {/* <!--box 1--> */}
         <div class="box-1">
             <span>1</span>
             <p class="heading" >Web Design</p>
             <p class="details" > If you want to make a website 
                 for your business contact me as soon as 
                 possible. You really like my work, if you dont
                 i fix it.</p>
             <button> Read More</button>
         </div>
         {/* <!--box 2--> */}
         <div class="box-2">
             <span>2</span>
             <p class="heading" >Web Development</p>
             <p class="details" > If you want to make a website 
                 for your business contact me as soon as 
                 possible. You really like my work, if you dont
                 i fix it.</p>
             <button> Read More</button>
         </div>
         {/* <!--box 3--> */}
         <div class="box-3">
             <span>3</span>
             <p class="heading" >Digital Marketing</p>
             <p class="details" > If you want to make a website 
                 for your business contact me as soon as 
                 possible. You really like my work, if you dont
                 i fix it.</p>
             <button> Read More</button>
         </div>

       </div>
  </div>
{/* <!--contact me--> */}
<div class="contact-me">
<p class="contact-mee"> If you Have Any Project In Your Mind.</p> 
<button> Contact Me</button> 
</div>
        </>
    )
}

export default Body





  
    
    