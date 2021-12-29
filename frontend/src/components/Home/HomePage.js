import React, { Component } from 'react';
import Hero from "./Hero/Hero";
class HomePage extends Component{
    render(){
        return(
            <React.Fragment>
                <Hero />
            </React.Fragment>
        );
    }
}
export default HomePage;