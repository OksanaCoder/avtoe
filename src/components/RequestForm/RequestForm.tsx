import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './style.css'
import { Redirect } from 'react-router-dom'

const RequestForm = (props) => {
  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setModel] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const bodyMessage = `Имя: ${username}
                     
                       Сообщение: ${comment}  
                      
                       Номер тел: ${phone}`
  // return <div className="pre-line">{bodyMessage}</div>

  const API_URL = `https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/sendMessage?chat\_id=987210358&text=${bodyMessage}&parse\_mode=HTML`

  // const chat_id = '987210358'

  const validate = (username, phone, comment) => {
    if ((username.length === 0 || phone.length === 0, comment.length === 0)) {
      errors.push('Поле повинно бути заповненим !')
    }

    if (phone.length < 10) {
      errors.push('Невірний формат телефону')
    }

    return errors
  }

  const data = (username, phone, comment) => {
    return axios.post(API_URL, {
      username,
      phone,
      comment,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const succesregv = await data(username, phone, comment)
    //form.current.validateAll()
    if (succesregv) {
      alert('Заявка відправлена !')
      // props.handleClose1()
      //props.history.push("/");
      return <Redirect to="/" />
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
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                placeholder="Номер телефону"
                value={phone}
                onChange={onChangePhone}
                name="phone"
                className="input-style"
                required
              />
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

              {/* <Button
                variant="primary"
                className="btn-form grey-back"
                onClick={props.handleClose1}
              >
                Скасувати
              </Button> */}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RequestForm
