import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { useTranslation } from 'react-i18next'

type TFormData = {
  username: string
  comment: string
  phone: string
}

const RequestForm = (props) => {
  const { t, i18n } = useTranslation()
  const history = useHistory()

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
    alert('Заявка відправлена !')
    history.push('/')
    props.handleCloseForm(true)
  }

  return (
    <Modal show={props.show_form} onHide={props.handleCloseForm} className="login-form">
      <Modal.Header closeButton>
        <Modal.Title>{t('request')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ value, onChange }) => (
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder={t('name')}
                  value={value}
                  onChange={onChange}
                  className="input-style"
                />
                {errors.username && (
                  <small style={{ color: 'red' }}>{t('errorForm')}</small>
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
                  placeholder={t('message')}
                  value={value}
                  onChange={onChange}
                  className="input-style"
                />
                {errors.comment && (
                  <small style={{ color: 'red' }}>{t('errorForm')}</small>
                )}
              </Form.Group>
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                return value.length >= 13 && value.length < 18
              },
            }}
            render={({ value, onChange }) => (
              <PhoneInput
                placeholder="095 * * *"
                value={value}
                defaultCountry="UA"
                onChange={onChange}

                //  "input-style form-control"
              />
            )}
          />
          {errors.phone && errors.phone.type === 'required' && (
            <small style={{ color: 'red' }}>{t('errorForm')}</small>
          )}
          {errors.phone && errors.phone.type === 'validate' && (
            <small style={{ color: 'red' }}>{t('format')}</small>
          )}
          <div className="text-center mt-5 flex-column">
            <Button variant="primary" type="submit" className="btn-form yellow-back">
              {t('send')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default RequestForm
