import React from 'react'
import Icon from'../assets/graph.png'
const Nographavailable = () => {
  return (
<>
<div style={{display:'flex',flexDirection:'column',gap:'5px',justifyContent:'center',alignItems:'center'}}>
<img src={Icon} style={{height:'40px',width:'40px'}}></img>
<p>No Graph data available!</p>
</div>
</>
  )
}

export default Nographavailable