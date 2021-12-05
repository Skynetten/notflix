import styled from 'styled-components';
import vid from '../testVideo.mp4';
import notflix from '../component/notflix.png'
import st from '../st.png';
import { NavLink, Outlet } from 'react-router-dom';
import { BiUser, BiSearch,BiVolumeMute,BiVolumeFull, BiCaretRight } from "react-icons/bi";
import { useState, } from 'react';

const TopRow = styled.div`
    align-items:baseline;
    display: flex;
    background-color: rgb(8,8,8);
    padding-bottom:15px;
`
const LinksPage = styled.div`
    display: flex;
    flex-grow: 2;
    align-items: center;

`
const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 400px;
    object-fit:cover;
    z-index: -1;
`
const Contain = styled.div`
    position : relative;

`
const ContainImg = styled.img`
    position: relative;
    left:35px;
    top:20px;
    max-width: 50%;
    height: auto;
`
const Button = styled.button`
    all:unset;
    background: none;
    cursor: pointer;
    size: 1.5vw;
    margin: 10px;

    &:active{
        transform: translate(2px);
    }
`
const TitleCard = styled.div`
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    left: 70px;
    max-width: 36%;
`

const Image = styled.img`
    object-fit: contain;
    width: 60%;
`
const Text = styled.span`
    margin: 15px 0;
    color:white;
    font-size:1.4vw;
`
const BigButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    padding:1px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.9vw;
    font-weight: 600;

`

function Main() {
    const [mute,setMute] = useState(false);
    
    const muteButton = () => {
        const vid = document.querySelector(".vid");
        setMute(!mute);
        vid.muted = mute;
    }

    const BgScroll = (e) =>{
        console.log(e.target);
    }
    const style = {color:'white',fontSize:"1.3rem"}
    const [page,setPage] = useState("main")
    
    return (
        <div className="browse-content">
            <div className="top-row-vid">
                <div className="bg-video" >
                    <Video className="vid" muted loop autoPlay src={vid}></Video>  
                    <TopRow>
                        <Contain>
                            <ContainImg src={notflix} alt={notflix} />
                        </Contain>
                        <LinksPage>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                          fontWeight: isActive ?"700" : ""
                                        };
                                    }}
                                    className="links-browse" to="/browse/">Home
                                </NavLink>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                          fontWeight: isActive ?"700" : ""
                                        };
                                    }} 
                                    className="links-browse" to="/browse/movies">Movies
                                </NavLink>
                                <NavLink to="/browse/tv-shows" 
                                    style={({ isActive }) => {
                                        return {
                                          fontWeight: isActive ?"700" : ""
                                        };
                                    }} 
                                    className="links-browse">TV Shows
                                </NavLink>
                        </LinksPage>
                        <Button><BiSearch style={style}/></Button>
                        <Button><BiUser style={style}/></Button>
                                
                    </TopRow>
                </div>
                                
                <TitleCard>
                    <div className="empty-class">
                        {/* Nothing to see  */}
                    </div>
                    <Image src={st}></Image>
                    <Text> After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab.</Text>
                    <BigButton>
                        <div className="play-space">
                            <BiCaretRight size={48}/>
                        </div>
                                
                    Play</BigButton>
                </TitleCard>
                <div className="mute-btn">
                    <Button  onClick={muteButton}>{mute?<BiVolumeFull size={28} style={style}/>:<BiVolumeMute size={28} style={style}/>}</Button>
                </div>
            </div>
            <Outlet/>
        </div>
        
    )
}

export default Main
