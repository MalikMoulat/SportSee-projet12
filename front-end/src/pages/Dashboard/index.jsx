import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../components/App/App'
import {useParams, Navigate} from 'react-router-dom'
import './style.css'

import getAllData from '../../API/Api'



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

import User from '../../Modelization/User';
import Activity from '../../Modelization/Activity'
import Average from '../../Modelization/Average'
import Performance from '../../Modelization/Performance'
import formatedMockedData from '../../Utils/FormatDatas'

import { getCalorieCount, getCarbohydrateCount, getLipideCount, getProteinCount } from '../../Utils/FormatDatas'

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../API/MockData'

function Dashboard() {

    const urlId = useParams()

    //Change the initiale state for using API DATA or MockedData
    //useState(true) = Use api data
    //useState(false) = Use mocked data
    const [firstFetch, setFirstFetch] = useState(true);

    const [getUserData, setGetUserData] = useState(null)
    const [getActivityData, setGetActivityData] = useState(null)
    const [getAverageData, setGetAverageData] = useState(null)
    const [getPerfData, setGetPerfData] = useState(null)

    const [getCalorieData, setGetCalorieData] = useState(null)
    const [getProteinData, setGetProteinData] = useState(null)
    const [getCarbohydrateData, setGetCarbohydrateData] = useState(null)
    const [getLipideData, setGetLipideData] = useState(null)

    if(Object.keys(urlId) !== 0){
        localStorage.setItem('id', urlId)
        useEffect(() => {
            async function getUserData() {
                try {
                    if (firstFetch) {
                        
                        //use API Data
                        console.log('Use API Data')
                    
                        const userDatas = await getAllData(urlId.id)
                        
                        const user = new User(userDatas.user)
                        const activity = new Activity(userDatas.activity)
                        const average = new Average(userDatas.average)
                        const performance = new Performance(userDatas.performance)

                        
                        //Placement de la data dans le useState
                        setGetUserData(user.data)
                        setGetActivityData(activity.data)
                        setGetAverageData(average.data)
                        setGetPerfData(performance.data)
                        setGetCalorieData(getCalorieCount(user.data))
                        setGetCarbohydrateData(getCarbohydrateCount(user.data))
                        setGetLipideData(getLipideCount(user.data))
                        setGetProteinData(getProteinCount(user.data))

                    } else if (!firstFetch){

                        //Use Mocked Data
                        console.log('Use Mocked Data')

                        //Placement de la data dans le useState
                        setGetUserData(formatedMockedData(USER_MAIN_DATA, urlId))
                        setGetActivityData(formatedMockedData(USER_ACTIVITY, urlId))
                        setGetAverageData(formatedMockedData(USER_AVERAGE_SESSIONS, urlId))
                        setGetPerfData(formatedMockedData(USER_PERFORMANCE, urlId))

                        setGetCalorieData(getCalorieCount(formatedMockedData(USER_MAIN_DATA, urlId)))
                        setGetCarbohydrateData(getCarbohydrateCount(formatedMockedData(USER_MAIN_DATA, urlId)))
                        setGetProteinData(getProteinCount(formatedMockedData(USER_MAIN_DATA, urlId)))
                        setGetLipideData(getLipideCount(formatedMockedData(USER_MAIN_DATA, urlId)))  
                    }
                }
                catch (error) {
                    console.error(error)
                }
            }
            getUserData()
        }, [])
        
    }
    
    
    




    return (
        <div className='content'>
        <div className='infos__chart'>
            <Header data={getUserData} />
            <SimpleBarChart data={getActivityData} />
            <TinyLineChart data={getAverageData} />
            <SimpleRadarChart data={getPerfData} />
            <SimpleRadialBarChart data={getUserData} />
            <div className='content__macro__infos'>
                <MacroInfos
                icon={CaloriesIcon}
                macroName={'Calories'}
                data={getCalorieData}
                />

                <MacroInfos
                icon={ProteinIcon}
                macroName={'Proteines'}
                data={getProteinData}
                />

                <MacroInfos
                icon={CarbsIcon}
                macroName={'Glucides'}
                data={getCarbohydrateData}
                />

                <MacroInfos
                icon={FatIcon}
                macroName={'Lipides'}
                data={getLipideData}
                />
            </div>
        </div>

        </div>
    )
}

export default Dashboard