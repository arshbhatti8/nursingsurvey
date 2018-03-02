import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import '../parallax/parallax.css';

class genderChart extends Component {

    render(){
        const dData = {
            labels: [
                'Male',
                'Female',
            ],
            datasets: [{
                data: [70,30],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
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
