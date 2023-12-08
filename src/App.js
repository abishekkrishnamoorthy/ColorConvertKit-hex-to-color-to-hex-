import React,{ useState } from 'react';
import Colortemp from './Colortemp';
import Header from './Header';
import Input from './Input';
import namedColors from 'color-name-list';

function App() {   
  const [search,setsearch]=useState('')
  const [tog,settog]=useState('black')
  const handletog=()=>{
     const t=tog==='black'?'white':'black'
     settog(t)
     console.log(tog)
  }
  return (
    <div className='App'>
      <Header/>
      <Colortemp 
            colorname={namedColors.filter(i=> (i.name)===(search)?i:(i.hex)===(search)?i:null).map((i)=>i.name)}
            colorcode={namedColors.filter(i=> (i.name)===(search)?i:(i.hex)===(search)?i:null).map((i)=>i.hex)}
            tog={tog}/>
      <Input search={search}
             setsearch={setsearch}
             handletog={handletog}
             />
    </div>
  );
}

export default App;
