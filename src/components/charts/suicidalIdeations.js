import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';

class genderChart extends Component {

    render(){
        const dData = {
            labels: [
                'Intentionally Cut burned, bruised, or otherwise injured yourself',
                'Seriously considered suicide',
                'Attempted Suicide',
                'None'
            ],
            datasets: [{
                data: [5,10,10,75],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FEF601',
                    '#010101',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
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


export default genderChart;
