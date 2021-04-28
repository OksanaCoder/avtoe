import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './style.css'
import { useHistory } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const RequestForm = (props) => {
  const history = useHistory()
  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setModel] = useState('')
  const [errorEmpty, setErrorEmpty] = useState('')
  const [errorPhone, setPhoneErr] = useState('')
  const [validated, setValidated] = useState(false)
  const bodyMessage = `Имя: ${username}
                     
                       Сообщение: ${comment}  
                      
                       Номер тел: ${phone}`
  // return <div className="pre-line">{bodyMessage}</div>

  const API_URL = `https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/sendMessage?chat\_id=987210358&text=${bodyMessage}&parse\_mode=HTML`

  // const chat_id = '987210358'

  const validate = (username, phone, comment) => {
    const regex = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g
    if ((username.length === 0 || phone.length === 0, comment.length === 0)) {
      setErrorEmpty('Поле повинно бути заповненим !')
    } else if (!regex.test(phone)) {
      setPhoneErr('Невірний формат телефону !')
    } else {
      setValidated(true)
    }
  }

  //phone validation: phone, 'uk-UA': /^(\+?38|8)?0\d{9}$/,

  const data = (username, phone, comment) => {
    return axios.post(API_URL, {
      username,
      phone,
      comment,
    })
  }
  // const succesregv = await data(username, phone, comment)

  const handleSubmit = async (e) => {
    e.preventDefault()
    validate(username, phone, comment)

    if (validated) {
      data(username, phone, comment)
      alert('Заявка відправлена !')
      return history.push('/')
    } else {
      console.log('Сталася помилка !')
    }
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
              <small style={{ color: 'red' }}>{errorEmpty}</small>
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
              <small style={{ color: 'red' }}>{errorEmpty}</small>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <PhoneInput
                country="UA"
                placeholder="095 *** ** **"
                value={phone}
                onChange={onChangePhone}
                name="phone"
                className="input-style"
              />
              {/* <Form.Control
                placeholder="095 *** ** **"
                value={phone}
                onChange={onChangePhone}
                name="phone"
                className="input-style"
                required
              /> */}
              <small style={{ color: 'red' }}>{errorEmpty}</small>
              <small style={{ color: 'red' }}>{errorPhone}</small>
              {/* <small style={{ color: 'red' }}>{errorNumber}</small> */}
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
