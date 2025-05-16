import React from 'react'
import NavBar from '../component/navbar'
import MainSection from '../component/mainsection'
import Header from '../component/header'
import "../styles/main-page.css"
import { useState } from 'react'
import {getGithubUsers} from "../api/api"
import { useEffect } from 'react'
import Footer from '../component/Footer'


function MainPage(props) {
  const [gitHubUser,setGitHubUser]=useState(null)
  const [user,setUser]=useState(null)


  function setUserState(data){
       setUser(data)
  }


  return (
    <>
    <NavBar />
    <Header   user = {user} setUser = {setUserState}/>
    {    user && <MainSection data={user} />}
    <Footer />
    </>
  )
}


export default MainPage