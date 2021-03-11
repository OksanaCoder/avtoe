import React, {  useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import './style.css'
import { Redirect } from 'react-router-dom';



const RequestForm = (props) => {

  
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("")

  const API_URL = process.env.REACT_APP_URL;

  const register = (
    username,
    phone,
    model
  ) => {
    return axios.post(API_URL + "/requests", {
      username,
      phone,
      model
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const succesregv = await register(
      username,
      phone,
      model
    );
    //form.current.validateAll()
    if (succesregv) {
      alert("Заявка відправлена !");
      props.handleClose1()
      //props.history.push("/");
      return <Redirect to="/" />;

    } else {
      console.log("Заповніть всі поля !");
    }
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUserName(username);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone
    (phone);
  };
  const onChangeModel = (e) => {
    const model = e.target.value;
    setModel(model);
  };

  return (
    <>
      <Modal
        show={props.show_form}
        onHide={props.handleCloseForm}
        className="login-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>Залишити заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={onChangeUsername}
                name="Ім'я"
                className="input-style"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Модель"
                value={model}
                onChange={onChangeModel}
                name="model"
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
              <Button
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
  );
};

export default RequestForm;
