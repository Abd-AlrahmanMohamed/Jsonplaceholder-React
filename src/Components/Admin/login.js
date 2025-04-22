import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResgisterHook from "../../Hook/Admin/Resgister-Hook";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, password, noChangeEmail, noChangePassword] = ResgisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className=" py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className=" mx-auto">تسجيل الدخول</label>

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
        </Col>
        <Col className=" d-flex justify-content-center mt-3">
                <div>ليس لديك حساب؟ </div>
            <Link to="/register" style={{textDecoration:"none"}}>
                 <div className="text-danger">اضغط هنا </div>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
