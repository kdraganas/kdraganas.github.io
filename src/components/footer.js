import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;