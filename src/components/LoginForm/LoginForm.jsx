import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './style.css'
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { loginAPI } from '../../API'
import { useHistory } from 'react-router-dom'

const user = {}

const LoginForm = ({ logged, setLogged }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  // const API_URL = process.env.REACT_APP_URL;
  const login = (email, password) => {
    console.log('idher')
    return loginAPI({ email, password })
      .then((response) => {
        console.log('24', response)
        if (response.data.token) {
          console.log(response)
          localStorage.setItem('user', JSON.stringify(response.data))
          // localStorage.setItem('fullName', JSON.stringify(response.data))
          // setUserName()
          // history.push('/auction')
          setLogged(true)
          localStorage.setItem('logged', logged ? user : '')
        }

        return response.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const confirmLogin = await login(email, password)
    if (confirmLogin) {
      alert('Вітаємо в AVTOE !')
      return history.push('/auction')
      // console.log(localStorage.getItem("user")
    } else {
      alert('Виникла помилка :(')
    }
  }

  return (
    <>
      <div className="login-form">
        <h3>Log in</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder=" Email"
              onChange={onChangeEmail}
              value={email}
              name="email"
              className="input-style"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
              value={password}
              className="input-style mb-4"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className="flex-form">
            <Form.Check type="checkbox" label="Remember" />
            <small>Forgot password ?</small>
          </Form.Group>
          <div className="flex-form mt-5 flex-column">
            <Button
              variant="primary"
              type="submit"
              className="btn-form yellow-back"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default LoginForm
