import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class depressionChart extends Component{


    render() {
        const data = {
            labels: [
                'Minimal',
                'Mild',
                'Moderate',
                'Moderately Severe',
                'Severe',
                'None',
            ],
            datasets: [{
                data: [9,10,4,7,4,1],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#66ff33',
                    '#800000',

                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#66ff33',
                    '#800000',
                ]
            }]
        };
        return <Doughnut
                data={data} />
    }
}
export default depressionChart;







