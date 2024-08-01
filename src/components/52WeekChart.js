import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const WeekChart = ({high, low}) =>
{

    const data = [
        {
          "name": "52 Week High vs. Low",
          "High": high,
          "Low": low
        },
      ]

    return (

        <div id='52WeekChart'>
           <BarChart width={430} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="High" fill="#8884d8" />
            <Bar dataKey="Low" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default WeekChart;