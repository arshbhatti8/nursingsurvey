import React from 'react';
import ResponsiveContainer from '../responsivecontainer/responsiveContainer';
import {Segment,Grid,Header,Icon,Button,Divider,Container,List,Modal,Card} from 'semantic-ui-react';
import './homepageLayout.css';
import Radium ,{StyleRoot} from 'radium';
import AllCharts from '../charts/allCharts';

const HomepageLayout = () => {


const depressionSymptoms=["Feeling Sad","Loss of interest or pleasure in activities once enjoyed","Changes in appetite — weight loss or gain unrelated to dieting",
                "Trouble sleeping or sleeping too much","Loss of energy or increased fatigue",
                "Increase in purposeless physical activity (e.g., hand-wringing or pacing) or slowed\n" +
                "movements and speech.","Feeling worthless or guilty","Difficulty thinking, concentrating or making decisions"];

const talkingSymptoms=["Killing Themselves","Feeling Hopeless","Having no reason to live","Being a burden to others","Feeling trapped","Unbearable pain"];

const behaviorSymptoms=["Increased use of alcohol or drugs","Looking for a way to end their lives, such as searching online for materials or means",
    "Withdrawing from activities","Isolation from family and friends","Sleeping too much or too little","Visiting or calling people to say goodbye","Giving away prized possesions"];

    const moodSymptoms=["Depression","Anxiety","Loss of Interest","Irritability","Humilitaion","Agitation","Rage"];

    return (
        <ResponsiveContainer>
           <div className='whatIsDepression' style={{padding:'8em 2em'}} >
               <Grid stackable stretched>
                <Grid.Row stretched>
                    <Grid.Column stretched width={16} >
                            <p>Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel,
                                the way you think and how you act.According to the American Psychiatric Association Depression (major depressive disorder)
                                is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.
                            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           </div>
            <div className='suicide' style={{padding:'8em 2em'}} >
                <Grid stackable stretched>
                    <Grid.Column width={7} floated='left'>
                        <h1>WHAT IS <span>SUICIDE?</span></h1>
                        <p>According to the CDC, suicide is Death caused by self-directed injurious behavior with
                            an intent to die as a result of the behavior.</p>

                    </Grid.Column>
                </Grid>
            </div>
            <Segment  style={{padding: '2em'}} vertical>
                <Header as='h1' style={{fontSize: '4vw'}}>Warning Signs</Header>
                <Grid celled='internally'  stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={4} style={{paddingBottom: '5em', paddingTop: '0em'}}>
                            <Header as='h3' style={{fontSize: '2em'}}>Depression</Header>
                            <Card
                                image={require('../../assets/images/depression.jpg')}
                                header='Symptoms of depression'
                                meta='Click button to expand'
                                />
                            <Modal dimmer='blurring' trigger={<Button color='blue'>Show Symptoms</Button>} style={{position:'absolute',top:'50%',left:'18%'}}>
                                <Modal.Header size='huge'>Depression symptoms can vary from mild to severe and can include the following :</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <Segment inverted>
                                            <List divided inverted relaxed animated size='big'>
                                                {
                                                    depressionSymptoms.map((symptom,index)=>{
                                                    return <List.Item key={index}>
                                                        <List.Content>
                                                            <List.Header>{index+1}. {symptom}</List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                })}
                                            </List>
                                        </Segment>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                        <Grid.Column width={12} style={{paddingBottom: '5em'}}>
                            <Grid divided columns={3} stackable>
                                <Header as='h3' style={{fontSize: '2em'}}>According to the American Foundation of Suicide prevention, Suicide signs and symptoms can
                                    vary from three different aspects:</Header>
                                    <Grid.Column>
                                        <Card
                                        image={require('../../assets/images/talking.jpg')}
                                        header='Talking'
                                        meta='Click button to expand'
                                        />
                                        <Modal dimmer='blurring' style={{position:'absolute',top:'50%',left:'18%'}} trigger={<Button color='blue'>Show Symptoms</Button>} >
                                            <Modal.Header size='huge'>If a person talks about:</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <Segment inverted>
                                                        <List divided inverted relaxed animated size='big'>
                                                            {
                                                                talkingSymptoms.map((symptom,index)=>{
                                                                    return <List.Item key={index}>
                                                                        <List.Content>
                                                                            <List.Header>{index+1}. {symptom}</List.Header>
                                                                        </List.Content>
                                                                    </List.Item>
                                                                })}
                                                        </List>
                                                    </Segment>
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>
                                    <Grid.Column>
                                    <Card
                                        image={require('../../assets/images/behavior.jpeg')}
                                        header='Behavior'
                                        meta='Click button to expand'/>
                                        <Modal dimmer='blurring' style={{position:'absolute',top:'50%',left:'18%'}} trigger={<Button color='blue'>Show Symptoms</Button>}>
                                            <Modal.Header size='huge'>Behaviors that may signal a significant risk are:</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <Segment inverted>
                                                        <List divided inverted relaxed animated size='big'>
                                                            {
                                                                behaviorSymptoms.map((symptom,index)=>{
                                                                    return <List.Item key={index}>
                                                                        <List.Content>
                                                                            <List.Header>{index+1}. {symptom}</List.Header>
                                                                        </List.Content>
                                                                    </List.Item>
                                                                })}
                                                        </List>
                                                    </Segment>
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>
                                    <Grid.Column>
                                    <Card
                                        image={require('../../assets/images/mood.jpg')}
                                        header='Mood'
                                        meta='Click button to expand'/>
                                        <Modal dimmer='blurring' style={{position:'absolute',top:'50%',left:'18%'}} trigger={<Button color='blue'>Show Symptoms</Button>} >
                                            <Modal.Header size='huge'>People who are considering suicide often display one or more of the following moods:</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <Segment inverted>
                                                        <List divided inverted relaxed animated size='big'>
                                                            {
                                                                moodSymptoms.map((symptom,index)=>{
                                                                    return <List.Item key={index}>
                                                                        <List.Content>
                                                                            <List.Header>{index+1}. {symptom}</List.Header>
                                                                        </List.Content>
                                                                    </List.Item>
                                                                })}
                                                        </List>
                                                    </Segment>
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{padding: '8em 0em'}} vertical>
                <Container text>
                    <Header as='h3' style={{fontSize: '2em'}}>What we did:</Header>
                    <p style={{fontSize: '1.33em'}}>
                        We conducted a survey through the internet primarily for college students to understand what
                        the stress and suicide ratio looks to be in the Bay Area. We took the results from the first 100
                        surveys and below is our results analyzed and what we concluded with.
                    </p>
                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{margin: '3em 0em', textTransform: 'uppercase'}}
                    >
                        <a href='#'>Survey Page</a>
                    </Divider>
                    <Header as='h3' style={{fontSize: '2em'}}>Our results</Header>
                    <p style={{fontSize: '1.33em'}}>
                        We collated our results from the survey and to visualize them better, we displayed them as different kinds of charts.
                    </p>
                    <Icon name='chevron down' link><a href='charts'/></Icon>
                </Container>
            </Segment>
            <AllCharts/>
            <Segment inverted vertical style={{padding: '5em 0em'}}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About'/>
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                    <List.Item as='a'>Religious Ceremonies</List.Item>
                                    <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services'/>
                                <List link inverted>
                                    <List.Item as='a'>Banana Pre-Order</List.Item>
                                    <List.Item as='a'>DNA FAQ</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                    <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>Footer Header</Header>
                                <p>Extra space for a call to action inside the footer that could help re-engage
                                    users.</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </ResponsiveContainer>
    );
};
export default Radium(HomepageLayout);
