import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../components/App/App'
import {useParams, Navigate} from 'react-router-dom'
import './style.css'

import Header from '../../components/Header'
import SimpleBarChart from '../../components/SimpleBarChart'
import TinyLineChart from '../../components/TinyLineChart'
import SimpleRadarChart from '../../components/SimpleRadarChart'
import MacroInfos from '../../components/MacroInfos'
import SimpleRadialBarChart from '../../components/SimpleRadialBarChart'

import CaloriesIcon from '../../assets/iconcalories.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'

function Dashboard() {

    return (
        <div className='content'>
        <div className='infos__chart'>
            <Header />
            <SimpleBarChart />
            <TinyLineChart />
            <SimpleRadarChart />
            <SimpleRadialBarChart />
        </div>
        <div>
            <MacroInfos
            icon={[CaloriesIcon]}
            macroName={['Calories']}
            value={['1500kCal']}
            />

            <MacroInfos
            icon={[ProteinIcon]}
            macroName={['Proteines']}
            value={['150g']}
            />

            <MacroInfos
            icon={[CarbsIcon]}
            macroName={['Glucides']}
            value={['150g']}
            />

            <MacroInfos
            icon={[FatIcon]}
            macroName={['Lipides']}
            value={['150g']}
            />
        </div>
        </div>
    )
}

export default Dashboard