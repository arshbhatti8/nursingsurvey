import React,{Component} from 'react';
import {Menu,Segment,Responsive,Visibility,Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomepageHeading from '../homepageheading/hompageHeading';
class desktopContainer extends Component{

state={activeItem:"Home"};

items= [{ key: 'Home', name: 'Home'},
    { key: 'Charts', name: 'Charts'},
    { key: 'References', name: 'References' }];

handleItemClick = (e, { name }) => this.setState({ activeItem: name });
hideFixedMenu =()=> this.setState({fixed:false});
showFixedMenu=()=> this.setState({fixed:true});
render () {
    const { children } = this.props;
    const {activeItem}=this.state;
    const { fixed } = this.state;

    return(
        <Responsive {...Responsive.onlyComputer}>
               <Visibility
               once={false}
               onBottomPassed={this.showFixedMenu}
               onBottomPassedReverse={this.hideFixedMenu}>
                   <Segment
                       inverted
                       style={{ minHeight: 700, padding: '1em 0em' }}
                       textAlign='center'
                       vertical>

                       <Menu
                          fixed={fixed ? 'top':null}
                          size="large"
                          inverted={!fixed}
                          pointing={!fixed}
                          secondary={!fixed}>

                            <Container>
                                {
                                    this.items.map(item =>
                                    {
                                        return <Menu.Item
                                        inverted
                                        name={item.name}
                                        onClick={this.handleItemClick}
                                        active={activeItem === item.name}
                                        />
                                    })
                                }
                            </Container>
                        </Menu>
                       <HomepageHeading/>
                   </Segment>
           </Visibility>
            {children}
        </Responsive>
    );

 }
}
desktopContainer.propTypes = {
    children: PropTypes.node,
};
export default desktopContainer;


