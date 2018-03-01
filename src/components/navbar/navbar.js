import React,{Component} from 'react';
import {Menu,Segment} from 'semantic-ui-react';

class Navbar extends Component{

state={activeItem:"Home"};

items= [{ key: 'Home', name: 'Home'},
    { key: 'Charts', name: 'Charts'},
    { key: 'References', name: 'References' }];

handleItemClick = (e, { name }) => this.setState({ activeItem: name });

render () {
    const {activeItem}=this.state;
    return(
        <div className="outerDiv">

                    <Menu

                      borderless
                      stackable={true}
                      fixed="top"
                      size="massive"

                      inverted
                    >
                    {this.items.map(item =>{
                        return<Menu.Item
                                name={item.name}
                                onClick={this.handleItemClick}
                                active={activeItem===item.name}
                                color="olive"
                                position="right"
                                />
                    })}
                    </Menu>



        </div>
    );


}}
export default Navbar;
