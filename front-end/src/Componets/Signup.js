import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const opennotepad = () =>{
   
}
  return (
    <div>
     <h3 className='registerhere'>Register</h3>
     <div className='inputboxes'>
     <input className='inputproperty' type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
     <input className='inputproperty' type='text' placeholder='Email' value={email} onChange={(e)=>setEmail>(e.target.value)}/>
     <input className='inputproperty' type='Password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
     </div>
    </div>
  )
}

export default Signup
