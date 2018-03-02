import React , {Component} from 'react';
import {Responsive, Sidebar,Menu,Segment,Container,Icon,Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomepageHeading from '../homepageheading/hompageHeading';

class mobileContainer extends Component {
    state = {};

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    items= [{ key: 'Home', name: 'Home'},
        { key: 'Charts', name: 'Charts'},
        { key: 'References', name: 'References' }];
    render(){
        const { children } = this.props;
        const { sidebarOpened } = this.state;
        const {activeItem}=this.state;
        return(
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='uncover'
                        inverted
                        vertical
                        visible={sidebarOpened}>
                        {
                            this.items.map(item=>{
                                return<Menu.Item
                                      inverted
                                      name={item.name}
                                      as='a'
                                      onClick={this.handleItemClick}
                                      active={activeItem === item.name}/>
                            })
                        }
                    </Sidebar>
                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handleToggle}
                        style={{ minHeight: '100vh' }}>
                            <Segment
                                inverted
                                textAlign='center'
                                style={{ minHeight: 350, padding: '1em 0em' }}
                                vertical>
                            <Container>
                                <Menu
                                    inverted
                                    pointing
                                    secondary
                                    size='large'>
                                        <Menu.Item
                                            onClick={this.handleToggle}>
                                            <Icon name='sidebar' />
                                        </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}

                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </Responsive>

        );
    }
}
mobileContainer.propTypes={
    children:PropTypes.node,
};


export default mobileContainer;