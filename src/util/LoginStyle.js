import styled, { css } from 'styled-components'

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

export {Invalid, Button, Input, FormLogin, TopRow}