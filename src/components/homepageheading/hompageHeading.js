import React from 'react';
import {Container,Header,Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const homepageHeading = ({mobile}) => (
    <Container text>

        <Header
        as='h1'
        inverted
        content='Suicide is not the solution'
        style={{
            fontSize: mobile? '2em' :'4em',
            fontWeight:'normal',
            marginBottom:0,
            marginTop:mobile ? '1.5em' : '3em',
        }}
        />
        <Header
            as='h2'
            inverted
            content='But here is how many people consider it'
            style={{
                fontSize: mobile? '1.5em' : '1.7em',
                fontWeight:'normal',
                marginTop: mobile? '0.5em' : '1.5em',
            }}
        />

            <a href='#Definitions'><Icon name='chevron down' size='huge'/></a>

    </Container>

);
homepageHeading.propTypes ={
    mobile: PropTypes.bool,
};
export default homepageHeading;
