import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const BidAskChart = ({bid, ask}) =>
{
    const data = [
        {
          "name": "Bid vs. Ask Price",
          "Bid": bid,
          "Ask": ask
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
            <Bar dataKey="Bid" fill="#8884d8" />
            <Bar dataKey="Ask" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default BidAskChart;