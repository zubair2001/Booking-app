import React from 'react'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

        </div>
    )
}

export default Featured