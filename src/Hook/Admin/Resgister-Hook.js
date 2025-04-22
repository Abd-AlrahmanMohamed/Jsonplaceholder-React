import react, { useEffect, useLayoutEffect, useState } from "react";
import notify from "../../Uitily/Use-Notificatation";
import { useDispatch, useSelector } from "react-redux";
import ApiRegister from "../../api/Admin/Api-Register";
import { useNavigate } from "react-router-dom";

const ResgisterHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.registerData.isLoading);
  const register = useSelector((state) => state.registerData.register);
  const error = useSelector((state) => state.registerData.error);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(true);

  const noChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const noChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const noChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const noChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const noChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const noChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const validationValues = () => {
    if (firstName === "") {
      notify("من فضلك ادخل الاسم الاول", "error");
      return;
    }
    if (lastName === "") {
      notify("من فضلك ادخل اسم العائله", "error");
      return;
    }
    if (userName === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (email === "") {
      notify("من فضلك ادخل الاميل ", "error");
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل كلمة السر ", "error");
      return;
    }
    if (number === "") {
      notify("من فضلك ادخل رقم الهاتف ", "error");
      return;
    }
  };

  const onSubmitRegister = async () => {
    validationValues();
    setLoading(true);
    try {

      await dispatch(
        ApiRegister({
          firstname: firstName,
          lastname:lastName,
          username: userName,
          email,
          password,
          contact: number,
        })
      );
      console.log({
        ApiRegister,
        firstName,
        lastName,
        userName,
        email,
        password,
        number
      });
      
    } catch (error) {}
    // await dispatch(ApiRegister({
    //     firstName,lastName,username: userName,email,password,contact:number,
    // }))
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

  return [
    firstName,
    lastName,
    userName,
    email,
    password,
    number,
    loading,
    noChangeFirstName,
    noChangeLastName,
    noChangeUserName,
    noChangeEmail,
    noChangePassword,
    noChangeNumber,
    onSubmitRegister,
  ];
};

export default ResgisterHook;
