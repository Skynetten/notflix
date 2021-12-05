// import {Background} won't work because it is a default export
// Don't need to destruct it
import Background from '../component/Background'
import bng from '../bng.jpg'
import notflix from '../component/notflix.png'
import Notflix from '../component/Notflix'
import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const TopRow = styled.div`
    display:flex;
    margin-bottom:24px;
`
const FormLogin = styled.div` 
    position : relative;
    margin: 0 auto ;
    max-width: 450px;
    z-index : 4;
`
const Input = styled.input`
    outline: none;
    padding-left: 10px;
    border-radius: 7px;
    font-size: 1.1rem;
    color:white;
    border: 0;
    background-color: #333;
    display: block;
    height: 50px;
    margin-bottom: 10px;
    width: 100%;
`
const Button = styled.button`
    width: 100%;
    background-color: red;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    border:0;
    cursor: pointer;
    padding:16px;
    border-radius: 6px;
    margin-bottom: 2rem;
`
const Invalid = styled.p`
    color: white;
    background-color: #e87c03;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 8px 20px;
`

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
                    <p className="sign-up-redirect">New to Netflix? <Link to="/sign-up" className="sign-link">Sign up now.</Link></p>
               </div>
                <div className="black-gradient-login"></div>
            </FormLogin>
        </div>
    )
}

export default Login
