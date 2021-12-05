// import {Background} won't work because it is a default export
// Don't need to destruct it
import Background from '../component/Background'
import bng from '../bng.jpg'
import notflix from '../component/notflix.png'
import Notflix from '../component/Notflix'
import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'


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
    padding:16px;
    border-radius: 6px;
`

function Login() {

    const [users, setUsers] = useState();

    useEffect(() => {

    }, [])

    return (
        <div className="login-page">
            <TopRow>
                <Notflix notflix={notflix} />
            </TopRow>
            <Background bng={bng} />

            <FormLogin>
                <div className="form-login">
                    <h1 className="sign-in"> Sign In </h1>
                    <Input type="email" onChange={changeValue} value={email} placeholder="Email Address"/>
                    <Input type="password" onChange={changeValue} value={password} placeholder="Password" />
                    <Button type="submit" onSubmit={authentication}>Sign In </Button>
                </div>
                <div className="black-gradient-login"></div>
            </FormLogin>
        </div>
    )
}

export default Login
