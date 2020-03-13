import React from 'react'
import footerLogo from './footerLogo.png'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-style">
                <div className="about-div">
                    <h2>About</h2>
                    <p>Get details on your favourite movies,
                       Stay up to date with popular movies around
                       the world and stay tuned with details of
                       upcoming movies.
                </p>
                </div>
            <div className="social-media">
                <a href="https://web.facebook.com" className="fa fa-facebook"></a>
                <a href="https://twitter.com/Olami_dipupo" className="fa fa-twitter"></a>
                <a href="google.com" className="fa fa-google"></a>
                <a href="instagram.com" className="fa fa-instagram"></a>
            </div>
            <div className="logo-div">
                <img src={footerLogo} alt="Powered by TMDB" />
            </div>
        </div>
    )

}


export default Footer