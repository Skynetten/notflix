import Background from '../component/Background'
import bng from '../img/bng.jpg'
import notflix from '../img/notflix.png'
import Notflix from '../component/Notflix'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import {Invalid, Button, Input, FormLogin, TopRow} from "../util/LoginStyle"



function Login() {

    const [email, setEmail] = useState();
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState();
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const changeValue = (e) =>{
        const value = e.target.value;
        const type = e.target.type;
        (type === 'email') ? setEmail(value) : setPassword(value);
        console.log(value);
    }

    const authentication = (e) =>{
        e.preventDefault();
        const find =users.find((user)=>
            user.email === email && user.password === password 
        )
        find != undefined ?navigate('/browse') : setValid(true);
        
    }

    useEffect(() => {
        const getUsers = async () =>{
            const data = await fetch("http://localhost:5000/users");
            const res = await data.json();
            setUsers(res);
        }
        getUsers();
    }, [])

    return (
        <div className="login-page">
            <TopRow>
                <Notflix notflix={notflix} />
            </TopRow>
            <Background bng={bng} />

            <FormLogin>
                <div className="form-login">
                    <form onSubmit={authentication}>
                        <h1 className="sign-in"> Sign In </h1>
                        {valid ?<Invalid>Sorry, we can't find an account with this email address. Please try again or create a new account.</Invalid>:''}
                        <Input type="email" onChange={changeValue} value={email} placeholder="Email Address" required/>
                        <Input type="password" onChange={changeValue} value={password} placeholder="Password" required/>
                        <Button type="submit">Sign In </Button>
                    </form>
                    <p className="sign-up-redirect">New to Netflix? <Link to="/sign-up" className="sign-link"> Sign up now.</Link></p>
               </div>
                <div className="black-gradient-login"></div>
            </FormLogin>
        </div>
    )
}

export default Login
