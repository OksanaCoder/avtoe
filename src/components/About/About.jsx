import React from 'react'
import Advantages from '../Advantages/Advantages'
import Header from '../Header/Header-1'
import Videos from '../Videos/Videos'
import org from '../../img/un.jpg'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import './style.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const About = () => {
    const containerStyle = {
        width: '100%',
        height: '400px',
        marginTop: '40px'
      };
      
      const center = {
        lat: 50.48970142061635,
        lng: 30.488861167016232
      };

      const locations = [
          {
              name: 'avtoe',
              location: {
                lat: 50.48970142061635,
                lng: 30.488861167016232
              }
          }
      ] 
    return (
        <div className='back-blue'>
        <Header />
        <Container fluid className='p-5'>
       
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Організація">
            <Row className='mt-5'>
            <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5'>
               
               <h6>ГРОМАДСЬКА ОРГАНІЗАЦІЯ</h6>
               <h3>Всеукраїнська асоціація автобізнесменів</h3>
          
           </div>
            </Row>
            <Row className='p-4 align-items-center mt-3'>
                <Col className='text-center' lg={6} md={12} sm={12}>
                <img src={org} width='100%' className='mb-2'/>
                </Col>
                <Col style={{lineHeight: '2', fontSize: '20px'}} lg={6} md={12} sm={12}>  
                        Наші ключові цілі - порядок, законність і надійність ведення автобізнесу в Україні. 
                        Ми відстоюємо порушені права покупців і продавців, забезпечуємо прозорі продажу автомобілів, 
                        піклуємося про розширення необхідної для автомобілістів інфраструктури. 
                        Кожен може стати членом нашої організації і допомагати нам робити автомобільний ринок України по-справжньому європейським!
                </Col>
            </Row>
            </Tab>
            <Tab eventKey="profile" title="Засновник">
            <Row  className='mt-5'>
            <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5'>
               
               <h6>Президент Всеукраїнської асоціації автобізнесменів</h6>
               <h3>Володимир Кузьменко</h3>
          
           </div>
            </Row>
            <Row className='p-4 align-items-center mt-3'>
                <Col lg={6} md={12} sm={12} className='text-center'>
                <img  className='mb-2' width='100%' src="https://thumb.tildacdn.com/tild3335-6566-4562-a264-306631386566/-/format/webp/a393fc5a-7ebe-4238-b.jpg"/>
                </Col>
                <Col lg={6} md={12} sm={12} style={{lineHeight: '2', fontSize: '20px'}}>
                "Автобізнес - це ціла галузь економіки України, яка справно платить податки і рухає багато інших галузей вітчизняної промисловості. 
                Але в той же час ця галузь системно стикається з низкою серйозних проблем. На жаль, починаючи з 90-х років минулого століття, 
                український вторинний автомобільний ринок переживає не кращі часи. Автомобільний бізнес - це лакмусовий папірець для кримінального світу.
                 На жаль, є багато шахраїв, системно намагаються провернути різні непорядні афери, ущемляючи права автомобілістів. Людей, які намагаються чесно купити або продати машину. 
                 Саме тому ми з вами об'єднуємося і впевнено рухаємося до принципово новим стандартам роботи цього ринку ".

                </Col>
            </Row>
            </Tab>
            <Tab eventKey="map" title="Місцеположення">
                <Col>
                     <LoadScript
                           googleMapsApiKey='AIzaSyABS95c2rEoEhNOc-7nFFD9kf3MokK582w'>
                            <GoogleMap
                            mapContainerStyle={containerStyle}
                            zoom={18}
                            center={center}
                            >
                           {
                                center.lat &&
                                ( 
                                <Marker position={center} />
                                ) 
                            }
                         </GoogleMap>
                        </LoadScript> 
                    
                    </Col>
            </Tab>
           
            </Tabs>
            
            
        </Container>

        <Advantages />
        <Videos />
        </div>
    )
}


export default About