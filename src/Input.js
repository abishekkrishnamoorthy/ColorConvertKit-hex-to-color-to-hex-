import React from 'react'

const Input = ({search,setsearch,tog,settog}) => {
        console.log(tog)
  return (
        <div>
        <form className='flex flex-col '>
        <input type="text" 
                role='search'
                value={search}
                onChange={(e)=>{setsearch(e.target.value)}}
                />
         </form>
         </div>       
  )
}

export default Input