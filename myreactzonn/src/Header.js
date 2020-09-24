import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider.js'
import { auth } from './firebase'
function Header() {
const [{basket , user}] = useStateValue();

const login = ()=> {
    if (user) {
        auth.signOut();
    }
}

    return (
        <nav className='header'>
          <Link to='/'>  <img className='header_logo' src='https://evancarthey.com/wp-content/uploads/2019/06/Amazon-company-logo.jpg'/></Link>


          <div className='header_Search'>
          <input className='header_searchInput' type='text' />
<SearchIcon className='header_searchIcon'/>
</div>

<div className='header_nav'>
<Link to={ !user && '/login'} className='header_link'>

<div onClick={login} className='header_option'>
<span className='header_optionLineOne'>Hello {user?.email}</span>
<span className='header_optionLineTwo'>{ user ? 'Sign out' : 'Sign in'}</span>
</div>
</Link>

<Link to='/' className='header_link'>

<div className='header_option'>
<span className='header_optionLineOne'>Returns</span>
<span className='header_optionLineTwo'> & Orders</span>
</div>
</Link>

<Link to='/' className='header_link'>

<div className='header_option'>
<span className='header_optionLineOne'>Your</span>
<span className='header_optionLineTwo'>Prime</span>
</div>
</Link>

<Link to='/checkout'>
<div className='header_optionBasket'>
<ShoppingBasketIcon className='header_shoppingBasket'/>
<span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
</div>

</Link>



</div>
         </nav>
    )
}

export default Header
