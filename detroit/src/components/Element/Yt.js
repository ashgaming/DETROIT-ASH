import React from 'react'
import '../../App.css'

export default function Yt() {
    return (
        <>
        <h1 id='Social' className='theme'>Social Media</h1>
        <div className='social_con theme'>
            <div className='yt_out'>
                <div>
                    <img className='logo_yt' alt='logo' src='https://yt3.ggpht.com/2xDiR7rW1LgO0q5IMyDA80ysm7H0e2RutaDyb14ZTzPvriAnj7ezQd2kfRr5cvMgho17MhXtyFI=s600-c-k-c0x00ffffff-no-rj-rp-mo' />
                </div>
                <div className='yt_details'>
                    <h2>
                        DETROIT ASH
                    </h2>
                    <p>
                        Life's too short to play bad games.
                    </p>
                    <a href='https://www.youtube.com/channel/UC3VP0rbTvraMvA4dWJaF5uw'>
                        <button className='sub_btn'>Subscribe</button>
                    </a>
                </div>

            </div>
            
            <div className='yt_out'>
                <div>
                    <img className='logo_yt' alt='logo' src='https://yt3.ggpht.com/2xDiR7rW1LgO0q5IMyDA80ysm7H0e2RutaDyb14ZTzPvriAnj7ezQd2kfRr5cvMgho17MhXtyFI=s600-c-k-c0x00ffffff-no-rj-rp-mo' />
                </div>
                <div className='yt_details'>
                    <h3>
                        ashgamingunknown
                    </h3>
                    <p>
                    Leveling up in real life.
                    </p>
                    <a href='https://www.instagram.com/ashgamingunknown?igsh=YzVkODRmOTdmMw=='>
                        <button className='sub_btn' Style='background-color:purple'>Follow</button>
                    </a>
                </div>


                  </div>
        </div>

        </>
    )
}
