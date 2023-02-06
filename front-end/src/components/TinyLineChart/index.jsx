import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'

import { handleFormatTick } from '../../Utils/FormatDatas';


function TinyLineChart({data}) {


  const datas = data?.sessions

  

    return(
        <div className='tiny__line__chart'>
          <h3>Durée moyenne des sessions</h3>
          <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={300}
                height={100}
                data={datas}>
                  <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#ffff"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ stroke: "#ffffff", strokeWidth: 2, r: 3 }}
                  />
                  <Tooltip
                    wrapperStyle={{
                      background: "#000",
                      color: '#000',
                      width: "39px",
                      height: "25px",
                      outline: "none",
                    }}
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      stroke={"#fff"}
                      tickFormatter={handleFormatTick}
                      
                    />
                    <YAxis hide padding={{ top: 70, bottom: 20 }} />
              </LineChart>
          </ResponsiveContainer>
        </div>
    )
}

export default TinyLineChart