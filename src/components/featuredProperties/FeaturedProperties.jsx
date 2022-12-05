import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img className='fpImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <span className='fpName'>Aparthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='fpItem'>
                <img className='fpImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <span className='fpName'>Aparthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='fpItem'>
                <img className='fpImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <span className='fpName'>Aparthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties