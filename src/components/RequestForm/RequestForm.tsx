import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'

type TFormData = {
  username: string
  comment: string
  phone: string
}

const RequestForm = (props) => {
  const history = useHistory()

  // return <div className="pre-line">{bodyMessage}</div>
  // const chat_id = '987210358'

  const {
    handleSubmit,
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

  const savePost = (data: TFormData) => {
    const { username, comment, phone } = data
    const bodyMessage = `Имя: ${username}
    
    Сообщение: ${comment}  
    
    Номер тел: ${phone}`
    const API_URL = `https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/sendMessage?chat\_id=987210358&text=${bodyMessage}&parse\_mode=HTML`
    return axios.post(API_URL, {
      username,
      phone,
      comment,
    })
  }

  const onSubmit = (data: TFormData) => {
    savePost(data)
  }

  return (
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
              </Form.Group>
            )}
          />
          {errors.username && (
            <small style={{ color: 'red' }}>Username is required.</small>
          )}

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
              </Form.Group>
            )}
          />
          {errors.comment && <small style={{ color: 'red' }}>Comment is required.</small>}

          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <PhoneInput
                placeholder="095 *** ** **"
                value={value}
                defaultCountry="UA"
                onChange={onChange}
              />
            )}
          />
          {errors.phone && <small style={{ color: 'red' }}>Phone is required.</small>}

          {/* <Controller
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
                  <small style={{ color: 'red' }}>Phone is required.</small>
                )}
              </Form.Group>
            )}
          /> */}

          <div className="text-center mt-5 flex-column">
            <Button variant="primary" type="submit" className="btn-form yellow-back">
              Відправити
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default RequestForm
