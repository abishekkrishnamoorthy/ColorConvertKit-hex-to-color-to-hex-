import React from 'react'

const Input = ({search,setsearch,handletog}) => {
  return (
        <div>
        <form className='flex flex-col '>
        <input type="text" 
                role='search'
                value={search.length>1?search[0].toUpperCase() +
                  search.slice(1):search}
                onChange={(e)=>{setsearch(e.target.value)}}
                />
         </form>
         <button className="my-8 w-20 mx-20 rounded-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={()=>handletog()}>toggle</button>
         </div>       
  )
}

export default Input