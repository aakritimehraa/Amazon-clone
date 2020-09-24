import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import Payment from './Payment'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
function App() {

const [{user} ,dispatch] = useStateValue();

const promise = loadStripe("pk_test_51HFm0AHL2rQoFd6xH5YyM0yaFrTxQQX6svS7XjeWmT238yqDpJvlFQCoiIQFSMHUYrMCZPbAnIAhtUnUGTWueeCQ00fVuCgknt");

useEffect(()=> {
const unsubscribe =  auth.onAuthStateChanged((authUser) => {
    if(authUser) {

   dispatch({
     type: 'SET_USER',
     user: authUser,
   })

    } else {

      dispatch({
        type: 'SET_USER',
        user: null,
      })

    }
  })
  return ()=>{
unsubscribe()
  }
} , [])

  return (
    <Router>
    <div className='App'>
      <Switch>
      <Route path='/payment'>
      <Header />
      <Elements stripe={promise}>
      <Payment /></Elements>
      </Route>
      <Route path='/checkout'>
      <Header />
      <Checkout />
      </Route>
      <Route path='/login'>
   <Login />
      </Route>
      <Route path='/'>
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App
