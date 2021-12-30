import React from 'react'

const Footer = () => {
    return (
        <>
              {/* <!---Footer--> */}
    <footer>
        <p>Ezie Innocent Portfolio</p>
        <p> Client's satisfaction is our primary goal.
        </p>
        {/* <!---social--> */}
        <div class="social-icons">
        <a href="https://facebook.com/innocentchukwudi.ezie"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/eminentpal"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com/eminent_pal"><i class="fab fa-instagram"></i></a>
        <a href="https://youtube.com"><i class="fab fa-youtube"></i></a>
        </div>
        {/* <!--Copyright--> */}
        <p class="copyright" > Copyright <span className="fa fa-copyright"></span> 2022 |  Ezie Innocent</p>
       
    </footer>

    {/* <!---attached social to bar--> */}
    <div class="a-social-b">
        <a  href="https://facebook.com/innocentchukwudi.ezie"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/eminentpal"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com/eminent_pal"><i class="fab fa-instagram"></i></a>
        <a href="https://youtube.com"><i class="fab fa-youtube"></i></a>
    </div> 
        </>
    )
}

export default Footer
