import React from 'react';
import { Image } from 'semantic-ui-react';
import './parallax.css';


const parallax = () => {

    return (
        <div className="outerDiv">
                <Image
                src={require('../../assets/images/background.jpg')}
                fluid
                />
        </div>
    );

};
export default parallax;
