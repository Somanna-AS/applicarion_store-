import React from 'react'
import Home from './Home';
import './Header.css'
import logo from './Images/aplogo.png'

function Header() {
  return (
    <div className='header'>
        <table className='tb' width={"100%"}>
            <tr width="100%">
                <td className='log' width="10%"><a href="/" ><img src={logo} width="80px" height="80px"></img></a></td>
                <td className='title'><h3>AppStore</h3></td>
                <td width="8%" ><a href='/Register ' className='re'>Register</a></td>
                <td width="5%" ><a href='/Login'  className='re'>Login</a></td>
            </tr>
        </table>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Register">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Register">Category</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Contact us</a>
        </li>
        <li class="nav-item dropdown">
          
        </li>
        <li>
        <div className='search_bar'>
        <input type='text' placeholder='search'></input>
      </div>
      </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>

)
}


export default Header;