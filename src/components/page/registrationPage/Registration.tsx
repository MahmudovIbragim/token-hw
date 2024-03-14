import { useState } from "react";
import scss from "./Registr.module.scss";
import {
  useGetRequestQuery,
  usePostRequestMutation,
} from "../../../redux/api/request";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isLoading} = useGetRequestQuery();
  const [createPost] = usePostRequestMutation()

  const handleAddUser = async () => {
    if (userName === "" || email === "" || password === "") {
      alert("Заполни");
    } else {
      const newData = {
        userName: userName,
        email: email,
        password: password,
      };
      await createPost(newData);
    }
  };

  console.log(data);
  console.log(isLoading);

  return (
    <div className={scss.Registr}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.box}>
            <input
              type="text"
              placeholder="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAddUser}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
