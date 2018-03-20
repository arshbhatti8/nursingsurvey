import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class traumaticEventsChart extends Component{


    render() {
        const data = {
            labels: [
                'Academics',
                'Career-related Issues',
                'Death of a Family member/friend',
                'Family Problems',
                'Intimate Relationships',
                'Finances',
                'Health problems of family member/partner/yourself',
                'Personal Apperance',
                'Sleep Difficulties',
                'None'
            ],
            datasets: [{
                data: [42,13,9,18,10,24,20,20,28,18],
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
export default traumaticEventsChart;







