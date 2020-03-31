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
                <a href="https://web.facebook.com" className="fa fa-facebook"><span>Link To Facebook</span></a>
                <a href="https://twitter.com/Olami_dipupo" className="fa fa-twitter"><span>Link To Twitter</span></a>
                <a href="/#" className="fa fa-google"><span>Link To Google</span></a>
                <a href="instagram.com" className="fa fa-instagram"><span>Link To Instagram</span></a>
            </div>
            <div className="logo-div">
                <img src={footerLogo} alt="Powered by TMDB" />
            </div>
        </div>
    )

}


export default Footer