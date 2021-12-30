import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
            <div className="ct-menuMobile">
                <ul className="ct-menuMobile-navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About the House</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#latestoffers">Latest Offers</a></li>
                    <li><a href="#lastposts">Last Posts</a></li>
                    <li><a href="#latestoffers">Contact</a></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;