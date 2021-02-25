import React, {  useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import './style.css'
import { Redirect } from 'react-router-dom';
const SignUpForm = (props) => {
   console.log(props)
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const API_URL = process.env.REACT_APP_URL;

  const register = (
    firstname,
    lastname,
    username,
    email,
    password,
    dob,
    phone
  ) => {
    return axios.post(API_URL + "/users/register", {
      firstname,
      lastname,
      username,
      email,
      password,
      dob,
      phone,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const succesregv = await register(
      firstname,
      lastname,
      username,
      email,
      password,
      dob,
      phone
    );
    //form.current.validateAll()
    if (succesregv) {
      alert("Registered Successfully");
      props.handleClose1()
      //props.history.push("/");
      return <Redirect to="/" />;

    } else {
      console.log("please check login");
    }
  };
  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
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

  const onChangeDob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  return (
    <>
      <Modal
        show={props.show1}
        onHide={props.handleClose1}
        className="login-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>Реєстрація</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control
                type="text"
                placeholder="Firs tname"
                value={firstname}
                onChange={onChangeFirstname}
                name="firstname"
                className="input-style"
              />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={onChangeLastname}
                name="lastname"
                className="input-style"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="User name"
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

            <Form.Group controlId="formBasicDateOfBirth">
              <Form.Control
                type="date"
                value={moment(dob).format("YYYY-MM-DD")}
                onChange={onChangeDob}
                name="dob"
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
                Зареєструватись
              </Button>
              <p className='p-12 mt-3'>Є аккаунт ?</p>
              <p className='p-12-link'><a>Увійти</a></p>
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
  );
};

export default SignUpForm;
