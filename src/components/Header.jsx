import React from 'react'
import { Link } from 'react-router-dom'
import {links} from './Data'

const Header = () => {

//use this method only if you wana keep the navbar sticky, else its best to just use 
//the simple method
const handleClick = (e) => {
    e.preventDefault()
    const target= e.target.getAttribute("href")
    console.log(target)
    const location = document.querySelector(target).offsetTop

    console.log(location)

    window.scrollTo({
        left: 0,
        top: location - 60,  //the height of the nav
    })
}

    return (
           <>
      
           <nav className="sticky">
            
            <Link to="/" ><h1 className="logo"> Ezie Innocent</h1></Link> 
        
            {links.map(link => {
                return(
                    <ul >
                    <a onClick={handleClick}  href={link.url} key={link.url} > {link.text}</a> 
                
                    </ul> 
                )
            })}
                
           
        <div  class="toggle"></div>
        </nav>

           </>
            
   
    )
}

export default Header




