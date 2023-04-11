import React from 'react'
import './Contents.css'
// import Cards1 from './Cards1.js';
// import Cards2 from './Cards2.js';
// import Cards3 from './Cards3.js';
// import Cards4 from './Cards4.js';
import image from './jpg.jpg';
import imp from './WhatsApp Image 2023-02-16 at 12.37.30 AM.jpeg' 
import { Button } from 'antd';
function Content() {
  return (
    <div>
        <div className="lnk">
          <a href=" http://localhost:3003/" target="_blank">Discussion group</a>
        </div>
        <div className="part1">
          <div className="user">
            <img src={image} alt="my logo" />
          </div>
          <div className="username">
            <h1 className="bija1">Welcome Wasif , nice to have you on board</h1>
            <h1 className="bija"><b>Enjoy your study session</b></h1>
            </div>

          <div className="roomdetails">
            <button className="greendot"></button>
            <span className="btn">18 Online</span>
            <a href="http://localhost:3004/" target="_blank">
              <Button type="primary">+ Create Room</Button> 
            </a>
          </div>
        </div>
        <div className="line">
        </div>
        <div>
            <img src={imp} alt="" style={{marginTop: '50px',height: '350px',
              width: '900px',objectFit: 'contain'}}/>
        </div>
        <div className="part2">
          {/* <div className="card1"> <Cards1/> </div>
          <div className="card2"> <Cards2/> </div>
          <div className="card3"> <Cards3/> </div> */}
          

          {/*<div className="card4"> <Cards4/> </div>*/}
        </div>
    </div>
  )
}

export default Content