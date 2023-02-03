import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './style.css'


// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];




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

  // console.log('Before reform : ', data)
  // console.log('reformData : ', reFormatDatas(data))

  const datas = reFormatDatas(data)


    return (
      <div className='simple__radar__chart'>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="80%" data={datas}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            
          />

          <Radar
            name="Mike"
            dataKey="value"
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