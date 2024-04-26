import React from 'react'
import { useState } from 'react'
const Form = () => {
    const[value,newvalue]=useState([{
        email:"",
        pass:"",
        pass2:"",
    }])
    const cng=(e)=>{
        console.log(e.target.name,e.target.value);
    }
  return (
    <form action="">
<label>email</label>
<input type="email"  
        placeholder='enter yoyr e mail'
        id='mail'
        name='email'
        onChange={cng}
        />

<label>enter your password</label>
<input type="password"  
        placeholder='enter your passwor'
        id='pass'
        name='pass1'
        onChange={cng}
        />
        <label>confrim password</label>
<input type="email"  
        placeholder='enter your cnfrm pass'
        id='pass2'
        name='pass2'
        onChange={cng}
        />

    </form>
  )
}

export default Form