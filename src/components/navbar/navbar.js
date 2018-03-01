import React,{Component} from 'react';
import {Menu} from 'semantic-ui-react';

class Navbar extends Component{

state={};

items= [{ key: 'editorials', name: 'Editorials',active:"true"},
    { key: 'review', name: 'Reviews'},
    { key: 'events', name: 'Upcoming Events', }];

handleItemClick = (e, { name }) => this.setState({ activeItem: name });

render () {
    const { activeItem } = this.state;
    return(
        <Menu attached="top"
              inverted="true"
              stackable="true"
              widths="3"
              >
            {this.items.map(item =>{
                return<Menu.Item
                        name={item.name}
                        onClick={this.handleItemClick}
                        active={activeItem===item.name}

                        />



        })}
        </Menu>
    );


}}
export default Navbar;
