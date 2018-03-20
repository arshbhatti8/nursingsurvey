import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class drugUsageChart extends Component{


    render() {
        const data = {
            labels: [
                'Cigarettes',
                'E-Cigarettes',
                'Hookah',
                'Marijuana',
                'Cocaine',
                'Methamphetamine',
                'Other Amphetamines(Diet pills,bennies)',
                'Narcotic Drugs',
                'None'
            ],
            datasets: [{
                data: [3,1,3,15,0,0,5,2,71],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#66ff33',
                    '#800000',
                    '#D53FF3',
                    '#666699',
                    '#010101',
                    '#ff0066',
                    '#000066'

                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#66ff33',
                    '#800000',
                    '#D53FF3',
                    '#666699',
                    '#010101',
                    '#ff0066',
                    '#000066'
                ]
            }]
        };
        return <Doughnut
            data={data} />
    }
}
export default drugUsageChart;







