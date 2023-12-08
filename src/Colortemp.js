import React from 'react'

const Colortemp = ({colorname,colorcode,tog}) => {
    const Style = {
        backgroundColor: colorcode,
        color:tog
     }
  return (
    <main className='p-8 my-14 w-48 text-center border-solid border-2 border-indigo-600' style={Style}>
      <h2>{colorname}</h2>
        <h3>{colorcode}</h3>
    </main>
  )
}

export default Colortemp