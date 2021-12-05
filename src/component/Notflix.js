import styled from "styled-components"

const Contain = styled.div`
    position : relative;

`
const ContainImg = styled.img`
    position: relative;
    left:35px;
    top:20px;
    width: 60%;
    height: auto;
`

function Notflix({notflix}) {
    return (
        <Contain>
            <ContainImg src={notflix} alt={notflix} />
        </Contain>

    )
}

export default Notflix
