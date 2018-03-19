import React from 'react';
import {Grid,Header,Button} from 'semantic-ui-react';
import GenderChart from './genderChart';
import DepressionChart from './depressionChart';
import NukaCarousel from 'nuka-carousel';
import Radium ,{StyleRoot} from 'radium';



const style = {
    '@media only screen and (min-device-width: 350px) and (max-device-width: 750px) and (-webkit-min-device-pixel-ratio: 2)':
        {
            display: 'inline-block',
            width: '300px',
            height: '300px'
        },

    '@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)':
        {
            display: 'inline-block',
            width: '800px',
            height: '500px',
        }
};

var allCharts = () => {
    return (
        <div>
            <Grid container stackable verticalAlign='middle' style={{padding:'8em 8em'}}>
                <Grid.Row>
                    <Grid.Column
                        width={16}>
                        <Header as='h2' style={{fontSize: '3em'}}>Survey Results</Header>
                        <p style={{fontSize: '1.33em'}}>
                            A total of 100 people participated in this survey.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row stretched>
                    <Grid.Column width={16} stretched>
                        <StyleRoot>
                            <NukaCarousel dragging>
                                <div
                                    style={style}>
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Here's a gender based ratio</Header>
                                    <GenderChart/>
                                </div>
                                <div
                                    style={style}>
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Here's the severity of Depression in Men</Header>
                                    <DepressionChart/>
                                </div>
                            </NukaCarousel>
                        </StyleRoot>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

}
export default allCharts;
