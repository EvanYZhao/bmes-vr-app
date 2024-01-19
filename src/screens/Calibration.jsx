import { useState } from "react";
import "../styles/Calibration.css";
import Avatar from "../components/Avatar";
import { useNavigate } from "react-router-dom";

function Calibration() {
    const [bend, setBend] = useState(4);
    const navigate = useNavigate();

    function navigateHome() {
        navigate("/");
    }

    return (
        <div className={"instruction-container"}>
            <h1 className={"calibration-header"}>Calibration Model</h1>

            <Avatar bend={bend} setBend={setBend} />

            {/* instruction button: we will likely need to store the appropriate bend value to the backend
            - TODO: figure out database structure
            - TODO: set up API route to POST max/min bend calibration values to database
            - TODO: establish various basic API routes (get, post, etc.) */}

            <button className={"instruction-button"}>
                ✨ this is as far as I can go ✨
            </button>
            <button onClick={navigateHome}>Go to Home Page</button>
        </div>
    );
}

export default Calibration;
