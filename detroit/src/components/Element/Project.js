import React from 'react'
import '../../App.css'
import Pcard from '../Cards/Pcard'

export default function Project() {
    return (
        <div id='Project' Style='margin:5px;' className='theme'>
            <h1>Projects</h1>
            <div className='Project-slider' Style='border: 2px solid black;'>
                <Pcard 
                name='Contract Farming platform'
                des='This is college project'
                tech='html ,css ,js, php, Postgres' 
                />
                <Pcard 
                name='C02 Sales Management' 
                tech='html ,css ,js ,php ,Mysql' 
                />
                <Pcard 
                name='Co2 menu card' 
                tech='html,css' 
                />
                
                <Pcard 
                name='Co2 The Soda bar and cafe Website' 
                tech='React,Django' 
                />

                <Pcard
                name='MoneyManager'
                tech='React native'
                />
            </div>
        </div>
    )
}
