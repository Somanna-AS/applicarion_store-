import React from 'react'
import './Footer.css'
import logo from './Images/aplogo.png'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

function Home() {
    return (
        <div >
            <footer>
            <table width="100%" >
                <tr   class='ft'>
                    <td width="20%"> <a href="/" ><img src={logo} width="80px" height="80px"></img></a></td>
                    <td width="60%"><h3>© Copyright 2022, All Rights Reserved.</h3></td>
                    <td width="20%" className='dd'> <BsGithub  /> <BsLinkedin /> <BsDiscord /></td>
                </tr>
            </table>
            </footer>


</div>

)
}


export default Home;