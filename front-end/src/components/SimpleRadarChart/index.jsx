import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './style.css'


function SimpleRadarChart({data}){

  

  function reFormatDatas(obj) {
    return obj?.data.map((nbrKind, key) => {
      if (Object.keys(obj?.kind)[key] == nbrKind.kind) {
        const frenchDatas = englishToFrench(obj?.kind[key + 1]);
        nbrKind.kind = frenchDatas
      }
      return nbrKind;
    });
  }

  function englishToFrench(str) {
    const words = {
      energy: "énergie",
      strength: "force",
      speed: "vitesse",
      intensity: "intensité",
      cardio: "cardio",
      endurance: "endurance",
    };
    return words[str];
  }

  
  // console.log('reformData : ', reFormatDatas(data))

  const datas = reFormatDatas(data)

  console.log('Before reform : ',  datas)



    return (
      <div className='simple__radar__chart'>
        <div className='simple__radar__chart__content'>
          <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="80%" data={datas}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              fontSize={12}
              
            />

            <Radar
              
              dataKey="value"
              stroke="red"
              fill="red"
              fillOpacity={0.6}
              
            />
          </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
}

export default SimpleRadarChart