import React from 'react'
import '../css/style.css'
import { auth } from '../../infrastucture/firebase/firebase'

function Footer() {
    return (
        <footer className="page-footer font-small">
            <div className="footer-copyright text-center ">
                <p>&copy; 2021 Copyright: Finca Ganadera. {auth().currentUser ? auth().currentUser.email : ""}</p>
            </div>
        </footer>
    )
}

export default Footer;
