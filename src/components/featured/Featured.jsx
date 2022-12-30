import React from 'react'
import useFetch from '../../hooks/useFetch.js'
import './featured.css'

const Featured = () => {
    const {data,loading,error}=useFetch("http://localhost:8800/api/hotels/countByCity?cities=Karachi,Lahore");
    console.log(data);
    return (
        <div className='featured'>
            {loading ? ("Loading please wait") :(<>
            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Karachi</h1>
                    <h1>{data[0]} Properties</h1>
                </div>
            </div>

            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Lahore</h1>
                    <h1>{data[1]} Properties</h1>
                </div>
            </div>

            <div className='featuredItem'>
                <img className='featuredImg' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                <div className='featuredTitles'>
                    <h1>Islamabad</h1>
                    <h1>{data[2]} Properties</h1>
                </div>
            </div>
            </>)}

        </div>
    )
}

export default Featured