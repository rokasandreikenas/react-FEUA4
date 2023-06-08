import { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../context/UserContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    handleLogin(user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <div>
            <label>Username</label>
          </div>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-item">
          <div>
            <label>Password</label>
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="button-container">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
