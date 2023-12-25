//import React, { useState } from 'react'
import '../../App.css'

export default function Pcard(props) {    
   /* const [loadInfo,setLoadinfo]=useState(false);
    const Load=()=>
    {
        setLoadinfo(!loadInfo);
    }*/
    return (
<>
    <div  className='Pcard'>
      <div><strong>{props.name}</strong>
      <h6>{props.tech}</h6>
      </div>
      
    </div>
    

</>
  )
}
