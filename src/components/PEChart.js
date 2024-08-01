import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const PEChart = ({forwardPE, trailingPE}) =>
{
    const data = [
        {
          "name": "Price-to-Earning Data",
          "Forward": forwardPE,
          "Trailing": trailingPE
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
            <Bar dataKey="Forward" fill="#8884d8" />
            <Bar dataKey="Trailing" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default PEChart;