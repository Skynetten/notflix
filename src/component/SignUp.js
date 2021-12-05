import { useState } from "react"
import { useNavigate } from "react-router";

function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();

    const addName = (event) =>{
        const temp = event.target.value;
        console.log(temp);
        setEmail(temp); 
    }
    const callSign = (event) => {
        event.preventDefault();
        navigate('/sign-up',{ state:{ email:{email} } }) 
    }

    return (
        <>
            <label>Ready to watch? Enter your email to create or restart your membership.</label>
            <form onSubmit={callSign} method="POST" >
                <div className="sign-up">
                    <div className="sign-up-form">
                        <input onChange={addName} type="email" className="sign-up-email" value={email} required></input>
                        <span className="floating-label">Email Address</span>
                    </div>
                    <button type="submit" className="sign-up-btn"> Get Started <span className="right-angle-arrow">&#8250;</span></button>
                </div>
            </form>
            
        </>
    )
}

export default SignUp
