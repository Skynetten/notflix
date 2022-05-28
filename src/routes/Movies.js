import { useEffect, useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    background-color: #141414;
`
const Box = styled.div`
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    overflow: auto;
    white-space: nowrap;
    justify-content: space-around;
`
const Heading = styled.h3`
    padding-left: 40px;
    padding-top:20px;
    color: white;
`


function Movies() {
    
    return (
        <Container>
            <Heading>Popular on Netflix</Heading>
        </Container>
    )
}

export default Movies
