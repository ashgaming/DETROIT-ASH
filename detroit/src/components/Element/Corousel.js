import React from 'react'

export default function Corousel() {
    return (
        <div>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-100" src="http://getwallpapers.com/wallpaper/full/d/5/2/15062.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.hdqwalls.com/wallpapers/anime-gaming-boy-9u.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="https://tse1.mm.bing.net/th?id=OIP.xoXV5JH_fl2hRhVY_t1fdgHaEK&pid=Api&P=0&h=180" alt="Third slide" />
                    </div>
                </div>
            </div>
         {/**
          * 
             <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            */}
        </div>
    )
}
