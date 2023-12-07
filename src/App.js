
import React,{ useState } from 'react';
import Colortemp from './Colortemp';
import Header from './Header';
import Input from './Input';

function App() {
  const items=[
    {code:"#4c4f56",name: "Abbey"},
    {code:"#0048ba",name: "Absolute Zero"},
    {code:"#1b1404",name: "Acadia"},
    {code:"#7cb0a1",name: "Acapulco"},
    {code:"#b0bf1a",name: "Acid Green"},
    {code:"#7cb9e8",name: "Aero"},
    {code:"#c9ffe5",name: "Aero Blue"},
    {code:"#714693",name: "Affair"},
    {code:"#b284be",name: "African Violet"},
    {code:"#00308f",name: "Air Force Blue"},
    {code:"#72a0c1",name: "Air Superiority Blue"},
    {code:"#d4c4a8",name: "Akaroa"},
    {code:"#af002a",name: "Alabama Crimson"},
    {code:"#fafafa",name: "Alabaster"},
    {code:"#f5e9d3",name: "Albescent White"},
    {code:"#93dfb8",name: "Algae Green"},
    {code:"#f0f8ff",name: "Alice Blue"},
    {code:"#84de02",name: "Alien Armpit"},
    {code:"#e32636",name: "Alizarin Crimson"},
    {code:"#c46210",name: "Alloy Orange"},
    {code:"#0076a3",name: "Allports"},
    {code:"#efdecd",name: "Almond"},
    {code:"#907b71",name: "Almond Frost"},
    {code:"#af8f2c",name: "Alpine"},
    {code:"#dbdbdb",name: "Alto"},
    {code:"#a9acb6",name: "Aluminium"}]

  const [search,setsearch]=useState('')
  return (
    <div className='App'>
      <Header/>
      <Colortemp 
            colorcode={items.filter(i=> ((i.name).toLocaleLowerCase())===(search.toLocaleLowerCase())).map((i)=>i.code)}/>
      <Input search={search}
             setsearch={setsearch}
             />
    </div>
  );
}

export default App;
