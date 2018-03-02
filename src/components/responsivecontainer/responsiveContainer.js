import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from '../desktopcontainer/desktopContainer';
import MobileContainer from '../mobilecontainer/mobileContainer';
const responsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

responsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default responsiveContainer;