/* eslint-disable */
//@ts-nocheck
import { useState } from "react";
import scss from "./Login.module.scss";
import { usePostLoginRequestMutation } from "../../../redux/api/request";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";

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
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleAddUser} variant="outlined">
            Outlined
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
