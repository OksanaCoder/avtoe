import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './style.css'
import { useTranslation } from 'react-i18next'

const ModalContactUs = (props) => {
  const { t } = useTranslation()
  return (
    <Modal show={props.open} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('contactWithUs')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('detailsByPhone')}
        <ul className="list-unstyled pt-3">
          <li><a className='text-tel' href="tel:+38 050 249 09 09">+38 050 249 09 09</a></li>
          <li><a className='text-tel' href="tel:+38 093 249 09 09">+38 093 249 09 09</a></li>
          <li><a className='text-tel' href="tel:+38 097 249 09 09">+38 097 249 09 09</a></li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.closeModal} className="btn-modal">
          {t('cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalContactUs
