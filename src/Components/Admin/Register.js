import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import ResgisterHook from '../../Hook/Admin/Resgister-Hook'
import { ToastContainer } from 'react-toastify';

const Register = () => {
  const [firstName, lastName, userName, email, password, number, loading,
    noChangeFirstName, noChangeLastName, noChangeUserName, noChangeEmail, noChangePassword, noChangeNumber, onSubmitRegister] = ResgisterHook();
  return (
    <Container  style={{minHeight: "680px"}}>
      <Row className=' py-5 d-flex justify-content-center'>
        <Col sm="12" className='d-flex flex-column'>
            <label className=' mx-auto'>تسجيل حساب جديد</label>
            
            <input
              value={firstName}
              onChange={noChangeFirstName}
              placeholder='الاسم الاول'
              type='text'
              className='user-input mt-3 text-center mx-auto'
            />
             <input
              value={lastName}
              onChange={noChangeLastName}
              placeholder='اسم العائله'
              type='text'
              className='user-input mt-3 text-center mx-auto'
            />
             <input
              value={userName}
              onChange={noChangeUserName}
              placeholder='اسم المستخدم'
              type='text'
              className='user-input mt-3 text-center mx-auto'
            />
             <input
              value={email}
              onChange={noChangeEmail}
              placeholder='الاميل'
              type='email'
              className='user-input mt-3 text-center mx-auto'
            />
             <input
              value={password}
              onChange={noChangePassword}
              placeholder='كلمة السر'
              type='password'
              className='user-input mt-3 text-center mx-auto'
            />
             <input
              value={number}
              onChange={noChangeNumber}
              placeholder='رقم الهاتف'
              type='number'
              className='user-input mt-3 text-center mx-auto'
            />
            <input
              // value={}
              onClick={onSubmitRegister}
              placeholder='success '
              type='submit'
              className='user-input mt-3 text-center mx-auto bg-black text-white'
            />
      </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default Register
