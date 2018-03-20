import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';

class overallHealthChart extends Component {

    render(){
        const dData = {
            labels: [
                'Excellent',
                'Good',
                'Fair',
                'Poor',
                'Don\'t Know'
            ],
            datasets: [{
                data: [7,45,29,19,0],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#00FF00',
                    '#D53FF3',
                    '#FEF601',
                    '#010101',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#00FF00',
                    '#D53FF3',
                    '#FEF601',
                    '#010101',
                ]
            }]
        };
        return(
            <Pie
                data={dData}
            />


        );
    }
}


export default overallHealthChart;
