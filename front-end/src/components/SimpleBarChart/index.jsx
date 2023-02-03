import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'


function SimpleBarChart({data}) {

  const datas = data?.sessions

  
    return (
        <div className='simple__bar__content'>
              <p>Activité quotidienne</p>      
              <BarChart
              width={830}
              height={320}
              data={datas}
              margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
              }}
              >
                <XAxis
                  dataKey="day"
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
                  dataKey="kilogram"
                  fill="#282D30"
                  radius={[5, 5, 0, 0]}
                  barSize={7}
                  name={'Poids (kg)'}
                />
                <Bar
                  dataKey="calories"
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