import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 4800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]


function StyleBar() {
    return <path strokeWidth="8" />
}

function SimpleBarChart() {

    return (
        <div className='simple__bar__content'>
              <p>Activité quotidienne</p>      
              <BarChart
              width={830}
              height={320}
              data={data}
              margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
              }}
              >
                <XAxis
                  dataKey="name"
                  tickLine={{ stroke: '#E60000' }}
                />
                <YAxis
                  orientation="right"
                  axisLine={false}
                />
                <Tooltip

                />
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <Legend
                  verticalAlign='top'
                  align='right'
                  iconType={'circle'}
                  height={35}
                />
                <Bar
                  dataKey="pv"
                  fill="#282D30"
                  radius={[5, 5, 0, 0]}
                  barSize={7}
                  name={'Poids (kg)'}
                />
                <Bar
                  dataKey="uv"
                  fill="#E60000"
                  radius={[5, 5, 0, 0]}
                  barSize={7}
                  name={'Calories brûlées (kCal)'}
                />
            </BarChart>
        </div>
        )
}

export default SimpleBarChart