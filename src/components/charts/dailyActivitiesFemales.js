import React,{Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class dailyActivitesFemales extends Component{
    render(){
        const data={
            labels: ['Not Difficult at all', 'Somewhat Difficult', 'Very difficult',
                'Extremely difficult'],
            datasets: [
                {
                    label: 'Number of Females',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [27, 30,5, 3],

                }
            ]
        };

        return(
            <HorizontalBar data={data}/>
        )
    }

}

export default dailyActivitesFemales;