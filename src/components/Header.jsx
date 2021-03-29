import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
           <>
      
           <nav>
            
            <Link to="/" ><h1 className="logo"> Ezie Chukwudi</h1></Link> 
            <ul>
                <Link to="/" ><li> Home</li></Link> 
                <Link to="/" ><li> About</li></Link> 
                <Link to="/" ><li> Contact</li></Link> 
                <Link to="/" ><li> Team</li></Link> 
            </ul>
        <div  class="toggle"></div>
        </nav>

           </>
            
   
    )
}

export default Header




