import React, {  useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import './style.css'
import { Redirect } from 'react-router-dom';
import { signUpAPI } from "../../API";

const SignUpForm = (props) => {
   console.log(props)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const API_URL = process.env.REACT_APP_URL;

  const register = (
    name,
    email,
    password,
    phoneNum
  ) => {
    return signUpAPI({name,
      email,
      password,
      phoneNum}).catch((err)=>{
        console.log(err)
      })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const succesregv = await register(
      username,
      email,
      password,
      phone
    );
    //form.current.validateAll()
    console.log(succesregv)
    if (succesregv) {
      alert("Реєстрація пройшла успішно!");
      props.handleClose1()
      //props.history.push("/");
      return <Redirect to="/" />;

    } else {
      console.log("please check login");
    }
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  return (
    <>
      <div className='login-form'>
        <h3>Sign Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
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
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
                name="password"
                className="input-style"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Control
                placeholder="Phone number"
                value={phone}
                onChange={onChangePhone}
                name="phone"
                className="input-style"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Я погоджуюся з умовами користування сайтом"
              />
            </Form.Group>
            <div className="text-center mt-5 flex-column">
              <Button
                variant="primary"
                type="submit"
                className="btn-form yellow-back"
              >
                Sign up
              </Button>
              <p className='p-12 mt-3'>Have an account ?</p>
              <p className='p-12-link'><a>Log in</a></p>
              {/* <Button
                variant="primary"
                className="btn-form grey-back"
                onClick={props.handleClose1}
              >
                Скасувати
              </Button> */}
            </div>
          </Form>
       </div>
    </>
  );
};

export default SignUpForm;
