import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import './style.css'
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const LoginForm = (props) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_URL;
  const login = (email, password) => {
    return axios
      .post(API_URL + "/users/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmLogin = await login(email,password);
    if (confirmLogin){
        alert("loginned successfully")
        return <Redirect to="/about" />;
    }else{
        alert("Login fails")
    }
  };


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="login-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>Увійти в аккаунт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                placeholder="Пароль"
                onChange={onChangePassword}
                value={password}
                className="input-style mb-4"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="flex-form">
              <Form.Check type="checkbox" label="Запам'ятати" />
              <small>Забули пароль ?</small>
            </Form.Group>
            <div className="flex-form mt-5 flex-column">
              <Button
                variant="primary"
                type="submit"
                className="btn-form yellow-back"
                onClick={handleSubmit}
              >
                Увійти
              </Button>
              <p className='p-12 mt-3'>Вперше на сайті ?</p>
              <p className='p-12-link'><a>Зареєструватись</a></p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginForm;
