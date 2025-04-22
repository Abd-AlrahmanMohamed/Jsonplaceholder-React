import React, { useEffect, useState } from "react";
import notify from "../../Uitily/Use-Notificatation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.registerData.isLoading);
  const register = useSelector((state) => state.registerData.register);
  const error = useSelector((state) => state.registerData.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);


  const noChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const noChangePassword = (e) => {
    setPassword(e.target.value);
  };


const validationValues = () => {
  if (email === "") {
    notify("من فضلك ادخل الاميل ", "error");
    return;
  }
  if (password === "") {
    notify("من فضلك ادخل كلمة السر ", "error");
    return;
  }
};

const onSubmitRegister = async () => {
  validationValues();
  setLoading(true);
  await dispatch(
    ApiRegister({
      firstName,
      lastName,
      username: userName,
      email,
      password,
      contact: number,
    })
  );
  setLoading(false);
};

useEffect(() => {
  if (loading === false) {
    if (register.data) {
      localStorage.setItem("token", register.data.token);
      notify("تم تسجيل الحساب بنجاح", "success");
      setLoading(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      console.log(register.data);
    }
    //
  }
}, [loading]);

}

export default LoginHook;
