import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useForm, Controller } from 'react-hook-form'

type TFormData = {
  username: string
  comment: string
  phone: string
}

const RequestForm = (props) => {
  const history = useHistory()

  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setModel] = useState('')

  const bodyMessage = `Имя: ${username}
                     
                       Сообщение: ${comment}  
                      
                       Номер тел: ${phone}`
  // return <div className="pre-line">{bodyMessage}</div>
  // const chat_id = '987210358'

  const API_URL = `https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/sendMessage?chat\_id=987210358&text=${bodyMessage}&parse\_mode=HTML`

  const data = (username, phone, comment) => {
    return axios.post(API_URL, {
      username,
      phone,
      comment,
    })
  }

  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<TFormData>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      comment: '',
      phone: '',
    },
  })
  const onSubmit = (data) => console.log(data)

  console.log(watch(), errors)
  return (
    <>
      <Modal show={props.show_form} onHide={props.handleCloseForm} className="login-form">
        <Modal.Header closeButton>
          <Modal.Title>Залиште заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <Form.Group controlId="username">
                  <Form.Control
                    type="text"
                    placeholder="Ім'я"
                    value={value}
                    onChange={onChange}
                    className="input-style"
                  />
                  {errors.username && (
                    <small style={{ color: 'red' }}>
                      {JSON.stringify(errors.username)}
                    </small>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="comment"
              control={control}
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <Form.Group controlId="comment">
                  <Form.Control
                    type="text"
                    placeholder="Повідомлення"
                    value={value}
                    onChange={onChange}
                    className="input-style"
                  />
                  {errors.comment && (
                    <small style={{ color: 'red' }}>
                      {JSON.stringify(errors.comment)}
                    </small>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <Form.Group controlId="phone">
                  <Form.Control
                    type="text"
                    placeholder="095 *** ** **"
                    value={value}
                    onChange={onChange}
                    className="input-style"
                  />
                  {errors.phone && (
                    <small style={{ color: 'red' }}>{JSON.stringify(errors.phone)}</small>
                  )}
                </Form.Group>
              )}
            />

            <div className="text-center mt-5 flex-column">
              <Button variant="primary" type="submit" className="btn-form yellow-back">
                Відправити
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RequestForm
