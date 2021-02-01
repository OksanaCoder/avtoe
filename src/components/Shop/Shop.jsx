
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'

const Shop = () => {
    return (
        <div className='back-grey'>
            <div style={{textAlign: 'center', paddingTop: '80px'}}>
                {/* <button className='grey-btn btn'>Купити авто</button>
                <button className='orange-btn btn'>Аукціон</button> */}
                <button className='grey-btn btn'>Buy car</button>
                <button className='orange-btn btn'>Auction</button>
            </div>
            
            <CarItem />
        </div>
    )
}

export default Shop