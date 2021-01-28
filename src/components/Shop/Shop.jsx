
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'

const Shop = () => {
    return (
        <div className='back-grey'>
            <div style={{textAlign: 'center', paddingTop: '80px'}}>
                <button className='grey-btn btn'>Купить авто</button>
                <button className='orange-btn btn'>Аукцион</button>
            </div>

            <CarItem />
        </div>
    )
}

export default Shop