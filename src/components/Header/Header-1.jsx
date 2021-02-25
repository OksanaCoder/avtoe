import React, { useRef, useState, useEffect, useCallback } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import search from '../../img/search.png'
import img_4 from '../../img/i-4.svg'
import img_1 from '../../img/i-1.svg'
import img_2 from '../../img/i-2.svg'
import img_3 from '../../img/i-3.svg'
import Flip from 'react-reveal/Flip';
import  Advantages from '../Advantages/Advantages'
import SliderCars from '../SliderCars/SliderCars'
import { useTransition, animated } from 'react-spring'

const Header = () => {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { fontSize: '3rem', opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(0) rotateX(0deg)', color: '#fff' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(0) rotateX(180deg)', color: '#F7BA07' },
      { transform: 'perspective(0) rotateX(0deg)' },
    ],
    leave: [{ color: '#F7BA07' }, { innerHeight: 0 }, { opacity: 0, height: 0 }, { transform: 'perspective(0) rotateX(0deg)' }],
    update: { color: '#fff' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Мрієш про власне авто ?']), 500))
    ref.current.push(setTimeout(() => set(['У AVTOE для тебе апетитні пропозиції']), 2000))
  }, [])

  useEffect(() => void reset(), [])
   return(
       <>
       <Container fluid className='background' style={{fontWeight: '700'}}>
           <Row className='p-4'>
             <Col lg={6} md={6} sm={6} className='text-left'>
                  {/* <img style={{ width: '30px'}} src={logo} alt='logo' className='logo-svg'/> */}
             </Col>
             <Col lg={6} md={6} sm={6} className='text-right'>
                 <select style={{fontSize: '20px', background: 'none', border: 'none', color: '#fff'}}>
                             <option value="ua">🇺🇦</option>
                             <option value="ru">🇷🇺</option>           
                  </select>
             </Col>
           </Row>
        
            <Row className='align-center'>
              
              <Col>
              <div className='flex-center white'>
    
              {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
              </animated.div>
      ))}

              <input type='text' placeholder='BMW X5  ' className='search-line'/>
              <img src={search}  width='20px'/>
                {/* <h6 style={{fontSize: '30px', letterSpacing: '3px'}}>Мрієш Про Власне Авто ?</h6> */}
                {/* <h4 style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold'}}>АВТО <small style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold', color: '#F7BA04'}}>Є</small>!</h4> */}
                {/* <h6 style={{fontSize: '20px', letterSpacing: '3px'}}><small className='highlight'>Апетитні</small> умови також <small className='highlight'>Є</small></h6> */}

              </div>
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
            {/* <img src={cat} style={{ position: 'absolute', bottom: '9vh', width: '30%', right: '35%'}}/>*/}
            {/* <img src={hignFive} style={{ position: 'absolute', bottom: '500px', width: '15%', right: '0'}}/> 
            <img src={mew} style={{ position: 'absolute', bottom: '50px', left: '40%', width: '30%'}}/>  */}

            {/* <img src={car_1} style={{ position: 'absolute', bottom: '90px', width: '30%', right: '2%'}}/> */}
            {/* <img src={car_2} style={{ position: 'absolute', bottom: '100px', width: '30%', right: '30%', opacity:'0.3'}}/> */}
        
       </Container>
       <SliderCars />
       <Advantages />
       
       </>
   )
}

export default Header
