import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../component/Background";
import bng from "../img/bng.jpg";
import notflix from "../img/notflix.png";
import Notflix from "../component/Notflix";
import UsersPost from "../util/user";
import { useNavigate } from 'react-router'
import { Button, Input, FormLogin, TopRow } from "../util/LoginStyle";

function SignUpPage({}) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const changeValue = (e) => {
    const value = e.target.value;
    const type = e.target.type;
    type === "email" ? setEmail(value) : setPassword(value);
    console.log(value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    UsersPost({ id: Math.random() * 10000, email: email, password: password });
    navigate('/login')
  };

  return (
    <>
      <div className="login-page">
        <TopRow>
          <Notflix notflix={notflix} />
        </TopRow>
        <Background bng={bng} />

        <FormLogin>
          <div className="form-login">
            <form onSubmit={submitForm}>
              <h1
                className="login"
                style={{ color: "white", padding: "24px 0" }}
              >
                Sign Up
              </h1>
              <Input
                type="email"
                value={email}
                onChange={changeValue}
                placeholder="Email Address"
                required
              />
              <Input
                type="password"
                value={password}
                onChange={changeValue}
                placeholder="Password"
                required
              />
              <Button type="submit">Sign Up </Button>
            </form>
            <p className="login-redirect">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                {" "}
                Login now.
              </Link>
            </p>
          </div>
          <div className="black-gradient-login"></div>
        </FormLogin>
      </div>
    </>
  );
}

export default SignUpPage;
