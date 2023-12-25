import React from 'react'
import './Profile.css'

export default function Profile() {
  return (
    <div id='Profile' className='Profile-Con theme'>
      <div className='title'>
        <h1>Profile</h1>
      </div>
      <div className='Profile-Con'>
        <div className='Img-Con'>
        <img Style='width:100%;max-width:150px;height:200px' src='https://yt3.ggpht.com/2xDiR7rW1LgO0q5IMyDA80ysm7H0e2RutaDyb14ZTzPvriAnj7ezQd2kfRr5cvMgho17MhXtyFI=s600-c-k-c0x00ffffff-no-rj-rp-mo' alt='Profile'/>
        </div>
        <div className='details'>
        <p><b>Name:</b> Ashish Sunil Alhat</p>
        <p><b>Age:</b> 20</p>
        <p><b>Email:</b> ashishalhat8@gmail.com</p>
        <p><b>Education:</b> Bsc (Computer Science)</p>
        <p><b>Location:</b> Pune</p>    
        </div>
      </div>
    </div>
  )
}
