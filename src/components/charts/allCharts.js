import React from 'react';
import {Grid,Header,Button} from 'semantic-ui-react';
import GenderChart from './genderChart';
import DepressionChart from './depressionChart';
import OverallHealthChart from './overallHealth';
import DepressionChartFemales from './depressionChartFemales';
import DailyActivitiesMalesChart from './dailyActivitesMales';
import DailyActivitiesFemales from './dailyActivitiesFemales';
import SuicidalIdeationsChart from './suicidalIdeations';
import TraumaticEventsChart from './traumaticEvents';
import DrugUsageChart from './drugUsageChart';
import NukaCarousel from 'nuka-carousel';
import Radium ,{StyleRoot} from 'radium';
import './allCharts.css';



const style = {


    '@media screen and (min-device-width: 1200px) and (max-device-width: 1600px)':
        {
            display: 'inline-block',
            width: '800px',
            height: '500px',
        },
    '@media screen and (min-device-width: 320px) and (max-device-width: 736px)':
        {
            display: 'inline-block',
            width: '300px',
            height: '300px',
        }



};

const allCharts = () => {
    return (
        <StyleRoot><div>
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

                                <NukaCarousel  dragging>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Here's a gender based ratio</Header>
                                    <GenderChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Here's the severity of Depression in Men</Header>
                                    <DepressionChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Overall Health for subjects of survey</Header>
                                    <OverallHealthChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Severity of Depression in Women</Header>
                                    <DepressionChartFemales/>
                                </div>

                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Difficulty Felt with Handling Their Daily Activities</Header>
                                    <DailyActivitiesMalesChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Difficulty Felt with Handling Their Daily Activities</Header>
                                    <DailyActivitiesFemales/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Suicidal Ideations</Header>
                                    <SuicidalIdeationsChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Traumatic or Difficult Events within the Past 12
                                        Months</Header>
                                    <TraumaticEventsChart/>
                                </div>
                                 <div style={style} 
                                     >
                                    <Header
                                        as='h3'
                                        style={{fontSize: '2em'}}>
                                        Drug Usage in the past 30 days</Header>
                                    <DrugUsageChart/>
                                </div>
                            </NukaCarousel>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div></StyleRoot>
    );

};
export default Radium(allCharts);
