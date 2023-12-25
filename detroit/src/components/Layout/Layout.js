import React from 'react'
import Corousel from '../Element/Corousel'
import Yt from '../Element/Yt'
import Skills from '../Element/Skills'
import Project from '../Element/Project'
import Profile from '../Element/Profile'
import YtVideo from '../Element/YtVideo'


export default function Layout() {
    return (
        <>       
        <Corousel/>
        <Profile/>
        <Skills/>
        <Project/>
        <Yt/>
        <YtVideo/>
        </>
    )
}
