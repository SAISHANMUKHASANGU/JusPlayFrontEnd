import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Checkingbookings=()=>{
    const Body=styled.div`
    height:100vh;
    background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size: cover;
    background-repeat: no-repeat;
    display:flex;
    justify-content:center;
    padding:30px

    `
    const location=useLocation()
    const loggedinowner=localStorage.getItem("loggedinowner")
    const [turfsowned,setTurfsowned]=useState(null)
    let filter;

    const getdata=async()=>
    {
        let response=await axios.get("http://localhost:5236/api/Turfs")
        let data=response.data
        let filtered=data.filter((turf)=>turf.usermail===loggedinowner)
        filter=filtered
        // console.log(filtered)
        setTurfsowned(filtered)
        console.log(filter)
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <>
        <Body>
            <div>
            {turfsowned? (turfsowned.map((turf)=>(<p style={{color:"white"}}>{turf.name}</p>
            ))): (
        <p>Loading data...</p>
      )}
      </div>
        </Body>
    </>
  )
}

export default Checkingbookings
