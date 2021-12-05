import { useLocation } from "react-router"
import SignUp from "./SignUp"


function Email() {

    const {state} = useLocation();
    return (
        <div className="big-text">
            <div className="small-text">
                <h1 className="sub-heading">Unlimited movies, TV shows and more.</h1>
                <h5>Watch anywhere. Cancel anytime.</h5>
                {console.log(state)}
            </div>
            <SignUp />
            
        </div>
    )
}

export default Email
