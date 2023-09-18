import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>Company</h3>
                <br></br>
                <p>About Us</p>
                <p>Careers</p>
                <p>Partners</p>
            </div>
            <div className="footer-column">
                <h3>Courses</h3>
                <br></br>
                <p>Register</p>
                <p>Login</p>
                <p>Projects</p>
                <p>Teachers</p>
                <p>Parents</p>
                <p>Resources</p>
            </div>
            <div className="footer-column">
                <h3>Support</h3>
                <br></br>
                <p>FAQ's</p>
                <p>Helpdesk</p>
                <p>Contact Us</p>
            </div>
            <div className="footer-column">
                <h3>Legal</h3>
                <br></br>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="footer-column">
                <p>LevelUp Works</p>
                <p>LevelUp Works is an auckland based enterprise dedicatedto developing game basedlearning softwear to help teachers in response to the New Zealand digital Technologies & Hangarau Matihiko.

                </p>
                <p>alan@levelupworks.com</p>
                <p>(021)668185</p>
            </div>
        </footer>
    );
}


export default Footer;

