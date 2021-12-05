import { useEffect, useState } from "react"
import styled from "styled-components"
import one from '../photos/1.jpg'
import two from '../photos/2.webp'
import three from '../photos/3.webp'
import four from '../photos/4.webp'
import five from '../photos/5.webp'
import eight from '../photos/8.webp'
import six from '../photos/6.jpg'
import seven from '../photos/7.jpg'



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

const API_URL = '/discover/movie?sort_by=popularity.desc&';
const IMG_URL = "https://image.tmdb.org/t/p/w300";
const movies = [
    {
        adult: false,
        backdrop_path: "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
        genre_ids: [878, 28, 12],
        id: 580489,
        original_language: "en",
        original_title: "Venom: Let There Be Carnage",
        overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        popularity: 18405.785,
        poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        release_date: "2021-09-30",
        title: "Venom: Let There Be Carnage",
        video: false,
        vote_average: 7.2,
        vote_count: 3554,
    },
    {
        adult: false
        ,backdrop_path: "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg"
        ,genre_ids:[28, 35, 80, 53]
        ,id: 512195
        ,original_language: "en"
        ,original_title: "Red Notice"
        ,overview: "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen."
        ,popularity: 4880.782
        ,poster_path: "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg"
        ,release_date: "2021-11-04"
        ,title: "Red Notice"
        ,video: false
        ,vote_average: 6.9
        ,vote_count: 1562
    }
]
const getImage = async (movie) =>{
    const res =await fetch(IMG_URL+movie.backdrop_path);
    const src = await res.blob();
    console.log(src);
    const imageObjectURL = URL.createObjectURL(src);
    return imageObjectURL;
}
function Movies() {
    // Movies contains the fetch from useEffecy
    // const [movies, setMovies] = useState([]);
    // // Fetches from api
    // useEffect(() => {
    //     // movies contains the database
    //     const fetchAPI = async ()=>{
    //         const dat = await fetch(API_URL);
    //         const res = await dat.json();
    //         setMovies(res);
    //     }
    //     fetchAPI();
    // }, [])

    return (
        <Container>
            <Heading>Popular on Netflix</Heading>
            <Box>
                <div>
                    <img src={one} alt="one" />
                </div>
                <div>
                    <img src={two} alt="one" />
                </div>
                <div>
                    <img src={three} alt="one" />
                </div>
                <div>
                    <img src={four} alt="one" />
                </div>
            </Box>
            <Heading>Top TV</Heading>

            <Box>
                <div>
                    <img src={five} alt="one" />
                </div>
                <div>
                    <img src={six} alt="one" />
                </div>
                <div>
                    <img src={seven} alt="one" />
                </div>
                <div>
                    <img src={eight} alt="one" />
                </div>
            </Box>
        </Container>
    )
}

export default Movies
