/* eslint-disable */
//@ts-nocheck
import { useState } from "react";
import scss from "./Login.module.scss";
import { usePostLoginRequestMutation } from "../../../redux/api/request";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPost] = usePostLoginRequestMutation();
  const navigate = useNavigate();

  const handleAddUser = async () => {
    const newList = {
      email: email,
      password: password,
    };
    const response = await loginPost(newList);
    const responseData = response.data;
    localStorage.setItem("localToken", responseData.token);
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={scss.Login}>
      Login
      <div className="container">
        <div className={scss.Content}>
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleAddUser}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
