import styled from "styled-components"

const BgImgGradient = styled.div`
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    background:linear-gradient(rgba(8,8,8,0.9),rgba(8,8,8,0.2),rgba(8,8,8,0.9));
    z-index: 1;
`

const BgImg = styled.img`
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    object-fit: cover;
    z-index: 0;
    width: 100%;
    height: 100%;
`

function Background({ bng }) {
    return (
        <div>
            <BgImg className="bg-img" src={bng} alt="netflix-background-img"/>
            <BgImgGradient/>
        </div>
    )
}

export default Background
