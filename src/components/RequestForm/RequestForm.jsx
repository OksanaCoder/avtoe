import React, {  useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import './style.css'
import { Redirect } from 'react-router-dom';



const RequestForm = (props) => {

  
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setModel] = useState("")

  const API_URL = 'https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/getUpdates';

  const chat_id = '987210358'

  console.log(API_URL)
  const data = (
    username,
    phone,
    comment
  ) => {
    return axios.post(API_URL, {
      username,
      phone,
      comment
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const succesregv = await data(
      username,
      phone,
      comment
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
    const comment = e.target.value;
    setModel(comment);
  };

  return (
    <>
      <Modal
        show={props.show_form}
        onHide={props.handleCloseForm}
        className="login-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>Leave request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method='POST' action='telegram.php'>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control
                type="text"
                placeholder="Ім'я"
                value={username}
                onChange={onChangeUsername}
                name="name"
                className="input-style"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Your message"
                value={comment}
                onChange={onChangeModel}
                name="comment"
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
            <div className="text-center mt-5 flex-column">
              <Button
                variant="primary"
                type="submit"
                className="btn-form yellow-back"
              >
                Send
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
