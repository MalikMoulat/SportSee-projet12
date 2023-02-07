import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'
import { Rectangle } from "recharts";

import { handleFormatTick } from '../../Utils/FormatDatas';


function TinyLineChart({data}) {

  const datas = data?.sessions

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tiny__line__chart__tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      )
      }
      return null
    }

    const CustomCursor = (prop) => {
      const { width, points } = prop;
      const X = points[0].x;
      const Y = points[0].y;
      const sum = width - X;
      return (
        <Rectangle
          width={sum}
          height={263}
          x={X}
          y={Y}
          style={{ background: "red", opacity: 0.1 }}
        />
      );
    };
  

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
                    // wrapperStyle={{
                    //   background: "#000",
                    //   color: '#000',
                    //   width: "39px",
                    //   height: "25px",
                    //   outline: "none",
                    // }}
                    content={(data) => <CustomTooltip active={data.active} payload={data.payload} label={data.label} />}
                    cursor={<CustomCursor />}
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