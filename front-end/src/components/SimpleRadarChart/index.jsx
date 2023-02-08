import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './style.css'




/**
 * 
 * @param {object} data Performence data uof user
 * @returns a radar chart with the performence user
 */
function SimpleRadarChart({data}){


  /**
  * It takes an object as a parameter, then it loops through the object's data property, and if the
  * object's kind property matches the data property's kind property, it translates the kind property to
  * French.
  * @param {object} obj - the object that contains the data to be reformatted
  * @returns {array} An array of objects.
  */
  function reFormatDatas(obj) {
    return obj?.data.map((nbrKind, key) => {
      if (Object.keys(obj?.kind)[key] == nbrKind.kind) {
        const frenchDatas = englishToFrench(obj?.kind[key + 1]);
        nbrKind.kind = frenchDatas
      }
      return nbrKind;
    });
  }


  /**
  * 
  * @param {string} str - the string to translate
  * @returns the French translation of the English word passed in as an argument.
  */
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

  const datas = reFormatDatas(data)


    return (
      <div className='simple__radar__chart'>
        <div className='simple__radar__chart__content'>
          <ResponsiveContainer
           width="100%" 
           height="100%">

          <RadarChart 
          outerRadius="80%" 
          data={datas}>

            <PolarGrid />

            <PolarAngleAxis
              dataKey={"kind"}
              fontSize={12}
            />

            <Radar
              dataKey={"value"}
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