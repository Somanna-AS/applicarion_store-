import React from 'react'
import  './Home.css'
import tp1 from './Images/tp1.png'
import magg from './Images/magg.png'
import ph from './Images/ph.jpg'
import ss from './Images/ss.png'
import ii from './Images/ii.png'
import yy from './Images/yy.png'


function Home() {
  return (
    <div className='home'>
        <div className='top_im'>
          <img src={tp1} width="100%"></img>
        </div>
        <div className='con'>
          <h1 className='hh'>Explore in-app events like movie premieres, gaming competitions and livestreams.</h1>
        </div>
        <table width="80%" className='hm'>
        <tr  width="80%">
          <td width="40%" height="450px" className='cel1'><img src={magg} width="50%" className='mag'></img><br></br> <h1>Discover amazing apps with a rich search experience.</h1></td>
          <td  width="40%" height="450px" className='cel2'><h1 className='con'>1.8M apps available worldwide.</h1></td>
        </tr><br></br>
        <tr  width="80%">
          <td  width="40%" height="450px" className='cel3'><h1>175 storefronts in over 40 languages.</h1></td>
          <td width="40%" height="450px" className='cel4'><h1>Over 150 expert editors worldwide.</h1></td>
        </tr>
        </table>
        <table  width="80%" className='hm'>
          <tr width="80%" >
            <td width="40%" height="450px" > <img src={ph} width="100%" ></img></td>
            <td width="40%" className='lt'> <h1>Get the details on every app.</h1></td>
          </tr>
        </table>
        <div width="80%"> <h1>Privacy and security. Built into everything we do.</h1></div>
        <div>
          <table  width="80%" className='hm'>
            <tr width="80%" >
              <td width="40%" height="450px"  className='lt'> <h1>Security for every app. At every level.</h1></td>
              <td width="40%" height="450px"  className='rt'> <img src={ss} width="90%" class="im"></img></td>
            </tr>
          </table>
        </div>
        <div>
          <table  width="80%" className='hm'>
            <tr width="80%" >
              <td width="40%" height="450px"  className='lt'> <h1>100% of apps are automatically screened for known malware.</h1></td>
              <td width="40%" height="450px"  className='rt'> <h1>Over 16K apps use Apple health technologies like HealthKit, CareKit and ResearchKit designed to protect patient privacy.</h1></td>
            </tr>
          </table>
        </div>
        <div className='con'>
          <h1 className='hh'>Hardware and software. Powering amazing experiences together by design.
Apps help unlock the full potential of your Apple devices.</h1>
        </div>
        <div ><img src={ii} width="80%" className='mi'></img></div>
        <br></br>
        <br></br>
        <div ><img src={yy} width="80%" className='mi'></img></div>
      <br></br>
      <br></br>

    </div>

  )
}


export default Home;