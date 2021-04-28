import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './style.css'
import { useHistory } from 'react-router-dom'

const RequestForm = (props) => {
  const history = useHistory()

  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setModel] = useState('')

  const [errors, setErrors] = useState({
    username: '',
    phone: '',
    comment: '',
  })

  const bodyMessage = `Имя: ${username}
                     
                       Сообщение: ${comment}  
                      
                       Номер тел: ${phone}`
  // return <div className="pre-line">{bodyMessage}</div>

  const API_URL = `https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/sendMessage?chat\_id=987210358&text=${bodyMessage}&parse\_mode=HTML`

  // const chat_id = '987210358'

  //phone validation: phone, 'uk-UA': /^(\+?38|8)?0\d{9}$/,

  const data = (username, phone, comment) => {
    return axios.post(API_URL, {
      username,
      phone,
      comment,
    })
  }
  // const succesregv = await data(username, phone, comment)

  const validate = () => {
    if (!username) {
      setErrors((prev) => ({ ...prev, username: 'Required' }))
    } else {
      setErrors((prev) => ({ ...prev, username: '' }))
    }
    const regex1 = new RegExp(/^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g)
    const regex2 = new RegExp(/[0-9]{10,10}/)

    /*

    Simple validation:
    
    1. Length 10-20

    2. Optional (Remove all special chars, then count the length 10-13)
      - Warn the users (remove special chars)
      - Code will trim the special chars
    3. Use some 
    4. You let +44, 

    RegEx (Dont use)

    098 111 11 11
    +38-098-111-11-11
    +38-098-111-11-11
    +380981111111
    38 098 111 11 11

    098, 096, 095
    098, 063, 093, 091, 095, 050, 067, 068, 087 (List of All valid)

    1. Difficult to mainitain valid numbers
    2. And even validated "+38 987,111 11 12", validation means nothing
    3. Why do you want to validation?
     a. Keep DB clean
     b. We need to call users (number should works)

     --- 
     Answer: There is ONLY one to make sure that a number works by sending "SMS / OTP / Code"

    */
    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: 'Required' }))
    } else if (!regex2.test(phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Invalid' }))
    } else {
      setErrors((prev) => ({ ...prev, phone: '' }))
    }
    if (!comment) {
      setErrors((prev) => ({ ...prev, comment: 'Required' }))
    } else {
      setErrors((prev) => ({ ...prev, comment: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validate()

    // if (validated) {
    //   data(username, phone, comment)
    //   alert('Заявка відправлена !')
    //   return history.push('/')
    // } else {
    //   console.log('Сталася помилка !')
    // }
  }

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUserName(username)
  }
  const onChangePhone = (e) => {
    const phone = e.target.value
    setPhone(phone)
  }
  const onChangeModel = (e) => {
    const comment = e.target.value
    setModel(comment)
  }

  return (
    <>
      <Modal show={props.show_form} onHide={props.handleCloseForm} className="login-form">
        <Modal.Header closeButton>
          <Modal.Title>Залиште заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control
                type="text"
                placeholder="Ім'я"
                value={username}
                onChange={onChangeUsername}
                name="name"
                className="input-style"
                required
              />
              <small style={{ color: 'red' }}>{errors.username}</small>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Повідомлення"
                value={comment}
                onChange={onChangeModel}
                name="comment"
                className="input-style"
                required
              />
              <small style={{ color: 'red' }}>{errors.comment}</small>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                placeholder="095 *** ** **"
                value={phone}
                onChange={onChangePhone}
                name="phone"
                className="input-style"
                required
              />
              <small style={{ color: 'red' }}>{errors.phone}</small>
            </Form.Group>
            <div className="text-center mt-5 flex-column">
              <Button
                onClick={handleSubmit}
                variant="primary"
                type="submit"
                className="btn-form yellow-back"
              >
                Відправити
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RequestForm
