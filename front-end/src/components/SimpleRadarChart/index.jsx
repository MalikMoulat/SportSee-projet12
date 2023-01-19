import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './style.css'
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];




function SimpleRadarChart(){

    return (
      <div className='simple__radar__chart'>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            
          />

          <Radar
            name="Mike"
            dataKey="A"
            stroke="red"
            fill="red"
            fillOpacity={0.6}
            
          />
        </RadarChart>
        </ResponsiveContainer>
      </div>
    )
}

export default SimpleRadarChart