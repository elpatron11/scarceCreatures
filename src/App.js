import React from "react"
import data from "./data"
import Nav from "./components/nav"
import Card from "./components/cards"
const allData= data.map(data=>{
  return (
    <Card obj={data}/>         
   
  );
})
export default function App(){
  return (
    <>
    <Nav />
   {allData}
    </>
  )
}