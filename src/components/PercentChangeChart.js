import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const PercentChart = ({fiftyTwoWeeks, twoHundredFiftyDays}) =>
{
    const data = [
        {
          "name": "Percent Changes Over Time",
          "52 Weeks": fiftyTwoWeeks,
          "250 Days": twoHundredFiftyDays
        },
      ]

    return (
        <div id='PEChart'>
           <BarChart width={430} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="52 Weeks" fill="#8884d8" />
            <Bar dataKey="250 Days" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default PercentChart;