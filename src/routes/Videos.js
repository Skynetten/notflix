import vid from '../img/testVideo.mp4';

function Videos() {
    return (
        <div className="exam">
            <video controls src={vid}></video>
        </div>
    )
}

export default Videos
