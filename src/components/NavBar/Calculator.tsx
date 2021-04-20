import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import price from '../../img/tag.svg'
import percent from '../../img/offer.svg'
import calendar from '../../img/calendar.svg'
import payment from '../../img/money.svg'

const Calculator = (props) => {
    
   const [userValues, setUserValues] = useState({
       amount: 0,
       interest: 0,
       years: 0
   })
  
    
      const [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false
    })
      const handleChange = (event) => {
            setUserValues({...userValues, [event.target.name]: event.target.value})
           
      }

     const calculateResults = ({amount, interest, years}) => {
        const rate = interest / 100 
        const total = rate * amount
        const monthly = total / years;

        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed(2);
            const totalPaymentCalculated = total.toFixed(2);
            // const totalInterestCalculated = (monthly * calculatedPayments - amount).toFixed(2);
       
            // Set up results to the state to be displayed to the user
            setResults({
              monthlyPayment: monthlyPaymentCalculated,
              totalPayment: totalPaymentCalculated,
            //   totalInterest: totalInterestCalculated,
             
              isResult: true,
            });
          }
          return;
     }
     
     let handleSubmit = (e) => {
        e.preventDefault()
        calculateResults(userValues)
    }
    const clearFields = () => {
        setUserValues({
          amount: '',
          interest: '',
          years: '',
        });
     
        setResults({
          monthlyPayment: '',
          totalPayment: '',
          totalInterest: '',
          isResult: false,
        });
      };
    return (
        <>
         <Modal show={props.show_calc} onHide={props.handleClose_calc} className='login-form calc_form'>
                     <Modal.Header closeButton>
                        <Modal.Title>Кредитний калькулятор</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>

                     <Form>
                     <Row>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Price, $
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text ><img src={price} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl type='number' name='amount' value={userValues.amount} onChange={handleChange} id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Interest, %  
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={percent} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl  type='number' name='interest' value={userValues.interest} onChange={handleChange} id="inlineFormInputGroup" />
                              </InputGroup>
                        </Col>
                     </Row>
                     <Row className='line-bottom mt-4'>
                        <Col lg={12} md={12} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Period (months)
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text ><img src={calendar} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl name='years' value={userValues.months} onChange={handleChange} id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        {/* <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Завдаток
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={payment} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col> */}
                     </Row>
                  
                    
                       <Row className='calc-output'>
                          <Col lg={6} md={12} sm={12} className='border-right-calc'>
                             <h5>Monthly payment, $</h5>
                             <h4>{results.monthlyPayment}</h4>
                          </Col>
                          {/* <Col lg={4} md={12} sm={12} className='border-right-calc'>
                             <h5>Загальний відсоток, %</h5>
                             <h4>{results.totalInterest}</h4>
                          </Col> */}
                          <Col lg={6} md={12} sm={12}>
                             <h5>Total amount, $</h5>
                             <h4>{results.totalPayment}</h4>
                          </Col>
                       </Row>
                     
                    <Row className='mt-5 text-center'>
                     <Col lg={4} md={12} sm={12}>
                       <Button variant="primary" type="submit" className='btn-form yellow-back mb-2' onClick={handleSubmit}>
                          Count
                        </Button>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                       <Button variant="primary" className='btn-form grey-back ml-2 mb-2' onClick={clearFields}>
                          Clear
                        </Button>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Button variant="primary" type="submit" className='btn-form grey-back' onClick={props.handleClose_calc}>
                           Cancel
                        </Button>
                    </Col>
                    
                    </Row>
                  </Form>
               </Modal.Body>
            </Modal>
        </>
    )
}

export default Calculator