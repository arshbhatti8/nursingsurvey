import React,{Component} from 'react';
import {Pie,defaults} from 'react-chartjs-2';
import '../parallax/parallax.css';

class genderChart extends Component {

    render(){
        const dData = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
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
