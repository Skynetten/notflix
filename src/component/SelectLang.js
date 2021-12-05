// import { BiWorld } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
export default function SelectLang() {

    const navigate = useNavigate();

    return (
        <div className="btn">
            <select className="btn-lang">
                <option value="0">English</option>
                <option value="1">Hindi</option>
            </select>
            <button className="btn-sign-in" onClick={()=> navigate('/login')} tabIndex="0">Sign In</button>
        </div>
    )
}
