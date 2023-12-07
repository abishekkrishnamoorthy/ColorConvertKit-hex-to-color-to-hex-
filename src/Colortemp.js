import React from 'react'

const Colortemp = ({colorcode}) => {
    const Style = {
        backgroundColor: colorcode,
        color:'black'
     }
  return (
    <main className='p-8 my-14 w-48 text-center border-solid border-2 border-indigo-600' style={Style}>
        <h3>{colorcode}</h3>
    </main>
  )
}

export default Colortemp