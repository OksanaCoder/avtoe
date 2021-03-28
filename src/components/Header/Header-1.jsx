import React, { useRef, useState, useEffect, useCallback } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import search from '../../img/search.png'
import img_4 from '../../img/i-4.svg'
import img_1 from '../../img/i-1.svg'
import img_2 from '../../img/i-2.svg'
import img_3 from '../../img/i-3.svg'
import logo_big from '../../img/logo-big.png'
import logo_small from '../../img/logo-small.png'
import MobApp from '../../components/MobApp/MobApp'
import Calculators from '../Calculators/Calculators'
import  Advantages from '../Advantages/Advantages'
import Select from 'react-select';
import { useHistory } from "react-router-dom";



const Header = ({reference, data}) => {
   const [ isPicked, setPicked ] = useState(false)
   const [ searchItem, setSearchItem ] = useState('')
   const [selected, setSelected] = useState('')
   console.log(data, 'for search bar')
   let history = useHistory();
   const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
    })
   }
   const handleClick = () => {
     setPicked(!isPicked)
     
   }
   const handleChange = (newVal) => {
     setSelected(newVal)
     console.log(newVal , 'newVal')
     history.push(`/carDetails/${newVal.id}`)
   }
  //  const options = () => {
  //    data.map(item => {
  //      return {
  //        value: item.name, 
  //        label: item.name
  //       }
  //    })
  //  }
  const renderList = () => {
    return data.map(data =>({label:data.name,value:data.name, id:data.id}))
   }

  //  const name  = data.map(i => {
  //    return i.name
  //  })

  // const dataList = [
  //   { label: name, label: name}
  // ]

   return(
       <>
         <Container className='background' fluid style={{fontWeight: '700'}}>
        {/* <BackgroundSlider className='background'
          images={[image1, image2, image3]}
          duration={3} transition={2} />  */}
          
           <Row className='p-4 nav-logo-lang'>
             <Col lg={6} md={6} sm={12} className='text-left'>
                  <img src={logo_small} alt='logo' width='30px'/>
             </Col>
             <Col lg={6} md={6} sm={12} className='text-right flex-right'>
                  <button onClick={handleClick} className={!isPicked ? 'active-link' : 'not-active'}><h6>UA</h6></button>
                  <button onClick={handleClick} className={isPicked ? 'active-link' : 'not-active'}><h6 className='ml-3'>RU</h6></button>
             </Col>
           </Row>
        
            <Row className='align-center'>
              
              <Col>
              <div className='flex-center white'>

                <h6 style={{fontSize: '1rem', fontWeight: 'bold',}}>Досить Мріяти про Авто</h6> 
                
                <h4 style={{fontSize: '3rem', fontWeight: 'bold', color: '#036DFD', lineHeight: '1'}}><small style={{fontSize: '2rem', fontWeight: 'bold', color: '#fff'}}>У</small>
                   <img style={{ width: '150px'}} src={logo_big} alt='logo' className='ml-3 mr-4'/>
                <small style={{fontSize: '2rem', fontWeight: 'bold', color: '#fff'}}>для тебе завжди є пропозиції</small></h4>
              
              {/* <input type='text' placeholder='BMW X5' className='search-line' onChange={(e) => setSearchItem(e.target.value)} value={searchItem}/> */}
              
              <Select
                  className='search-line'
                  placeholder='Пошук...'
                  options={renderList()}
                  styles={customStyles}
                  onChange={handleChange}
                  value={selected}
                     />
              </div>
              {/* <img src={search}  width='20px'
              onClick={() => {
                setSelected(data.find(item => item.name === selected))
              }}/> */}
       
             </Col>
            </Row>
     
       <Row className='text-center mt-5'>

         <Col >
             <img src={img_4} className='white-fill mr-2' width='70px'/>
        
             <img src={img_1} width='70px' className='white-fill mr-2' />
         
             <img src={img_2} width='70px' className='white-fill' />

             <img src={img_3} width='70px' className='white-fill ml-2' />
         </Col>
       </Row>
           
       </Container>
       
       <Calculators reference={reference}/>
       <Advantages />
       <MobApp />
       
       </>
   )
}

export default Header
