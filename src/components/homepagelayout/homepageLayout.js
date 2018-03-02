import React from 'react';
import ResponsiveContainer from '../responsivecontainer/responsiveContainer';
import {Segment,Grid,Header,Image,Button,Divider,Container,List} from 'semantic-ui-react';
import GenderChart from '../charts/genderChart';
import DepressionChart from '../charts/depressionChart';


const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column
                        width={16}>
                        <Header as='h2' style={{ fontSize: '3em' }}>We conducted a survey</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            A total of 100 people participated in this survey.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='left' width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Here's a gender based ratio</Header>
                            <GenderChart/>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Here's the severity of Depression in Men</Header>
                            <DepressionChart/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                            <b>Nan</b> Chief Fun Officer Acme Toys
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                    nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                    and worth your attention.
                </p>
                <Button as='a' size='large'>Read More</Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
                    true.
                    It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
                </p>
                <Button as='a' size='large'>I'm Still Quite Interested</Button>
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>Footer Header</Header>
                            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);
export default HomepageLayout;
