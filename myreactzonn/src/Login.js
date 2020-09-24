import React, { useState } from 'react'
import './Login.css'
import {Link , useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory()
const [email , setEmail] = useState('')
const [ password , setPassword] = useState('')
     const login = event=> {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
history.push('/')
        }).catch(e => alert(e.message))


    }

    const register = event=>{
        event.preventDefault()

        auth.createUserWithEmailAndPassword(email, password).then(auth => {
history.push('/')
        }).catch(e => alert(e.message))
    }

    return (
        <div className='login'>
           <Link to='/'> <img className='login_logo' src='https://www.kindpng.com/picc/m/1-11909_amazon-logo-png-transparent-background-company-logos-png.png' alt='' />
           </Link>


<div className='login_container'>
<h1>Sign in</h1>
<form>
<h5>E-mail</h5>
<input value={email} onChange={event => setEmail(event.target.value) } type='text' />
<h5>Password</h5>
<input value={password} onChange={event => setPassword(event.target.value)} type='password' />
<button onClick={login} type='submit' className='login_signInButton'>Sign in</button>
</form>
<p>
By signing in you agree to amazons condition of see our privacy notice , our cookies notice and our internet based ads notice.
</p>
<button onClick={register} className='login_RegisterButton'>Create your amazon account</button>
 </div>

        </div>
    )
}

export default Login
