import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './style.css'
import { useHistory } from 'react-router-dom'
import { signUpAPI } from '../../API'

const SignUpForm = (props) => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  // const API_URL = process.env.REACT_APP_URL;

  const register = (name, email, password, phoneNum) => {
    return signUpAPI({ name, email, password, phoneNum }).catch((err) => {
      console.log(err)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const succesregv = await register(username, email, password, phone)
    //form.current.validateAll()
    console.log(succesregv)
    if (succesregv) {
      alert('Вітаємо ! Ви стали учасником аукціону !')
      return history.push('/login')
    } else {
      console.log('Сталася помилка :(')
    }
  }

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const onChangePhone = (e) => {
    const phone = e.target.value
    setPhone(phone)
  }

  return (
    <>
      <div className="login-form">
        <h3 className="mb-4">Реєстрація</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Ім'я"
              value={username}
              onChange={onChangeUsername}
              name="username"
              className="input-style"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              name="email"
              className="input-style"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={onChangePassword}
              name="password"
              className="input-style"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Control
              placeholder="Номер телефону"
              value={phone}
              onChange={onChangePhone}
              name="phone"
              className="input-style"
            />
          </Form.Group>

          <div className="text-center mt-5 flex-column">
            <Button variant="primary" type="submit" className="btn-form yellow-back">
              Зареєструватись
            </Button>
          </div>
          <div className="text-center mt-5 d-flex flex-column">
            Уже зареєстровані ?
            <a
              href="/"
              className="hover-link mt-3"
              onClick={(e) => {
                e.preventDefault()
                history.push('/login')
              }}
            >
              Увійти
            </a>
          </div>
        </Form>
      </div>
    </>
  )
}

export default SignUpForm
