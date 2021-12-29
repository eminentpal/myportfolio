import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const About = ({location}) => {
const shortLink = useParams()


// useEffect(() => {
//     if(shortLink) {
//         window.location.replace("https://www.w3schools.com")
//     }
// }, [shortLink])



    return (
        <div className="aboutapp" >
            
        </div>
    )
}

export default About
