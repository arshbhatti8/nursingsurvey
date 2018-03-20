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
                'None'
            ],
            datasets: [{
                data: [17,28,9,6,3,2],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'orange',

                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'orange',
                ]
            }]
        };
        return <Doughnut
            data={data} />
    }
}
export default depressionChart;







