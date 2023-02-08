import React from 'react';
import PropTypes from "prop-types"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import './style.css'



/**
 * 
 * @param {object} data Data user
 * @returns a div with the pourcent score of the user and a radial bar chart
 */
function SimpleRadialBarChart({data}) {

  const datas = []
  const todayScore = data?.todayScore
  const score = data?.score


  if(typeof todayScore !== 'undefined'){
    datas.push(data.todayScore)
  }else if(typeof score !== 'undefined'){
    datas.push(data.score)
  }

  const dataValue = 360 * datas[0]

  const pourcentScore = 100 * datas[0]
  
    return (
    <div className='simple__radial__bar__chart'>
      <h3>Score</h3>
      <div className='pourcent__score'>
        <span>{pourcentScore + '%'}</span>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer className={'radialBarChart'} width="100%" height="100%">
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
            background={{ fill: "#FF0101" }}
            clockWise
            dataKey={"0"}
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
    )
  }

  SimpleRadialBarChart.propTypes = {
    data: PropTypes.object
  }

export default SimpleRadialBarChart