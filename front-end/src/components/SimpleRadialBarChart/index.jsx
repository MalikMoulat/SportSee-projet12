import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import './style.css'

// const data = [
//   {
//     name: '18-24',
//     uv: 31.47,
//     pv: 2400,
//     fill: '#8884d8',
//   }
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };



function SimpleRadialBarChart({data}) {

  

  const datas = []
  const todayScore = data?.todayScore
  const score = data?.score

  

  // console.log(todayScore, score)

  if(typeof todayScore !== 'undefined'){
    // console.log('todayScore')
    datas.push(data.todayScore)
  }else if(typeof score !== 'undefined'){
    // console.log('Score')
    datas.push(data.score)
  }

  // console.log(datas)

  const dataValue = 360 * datas[0]

  


    return (
    <div className='simple__radial__bar__chart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          barSize={10}
          startAngle={-180}
          endAngle={-180 + -dataValue}
          data={datas}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background={{ fill: "#2C3FF7" }}
            clockWise
            dataKey="0"
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
    );
  }

export default SimpleRadialBarChart