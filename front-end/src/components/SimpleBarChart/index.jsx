import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'

/**
 * 
 * @param {object} data Activity data of user
 * @returns a bar chart with the activity user
 */
function SimpleBarChart({data}) {

  const datas = data?.sessions
  const datax = []
  const payload = [[], []]

  for (let day = 0; day < datas?.length; day++) {
    const dayStr = (day + 1).toString()
    datax.push({
      day: dayStr,
      kilogram: datas[day].kilogram,
      calories: datas[day].calories
    })
    payload[0].push(datas[day].kilogram)
    payload[1].push(datas[day].calories)
  }

  const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="simple__bar__content__tooltip">
          <div>{payload[0]?.value}kg</div>
          <div>{payload[1]?.value}kCal</div>
        </div>
        )
      }
      return null
    }

  
    return (
        <div className='simple__bar__content'>
              <h3>Activité quotidienne</h3>      
              <BarChart
              width={830}
              height={320}
              data={datax}
              margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
              }}
              >
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  domain={["dataMin + 1", "dataMax + 1"]}
                />
                <YAxis
                  orientation="right"
                  axisLine={false}
                />
                <Tooltip
                  content={(data) => <CustomTooltip active={data.active} payload={data.payload} />}
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