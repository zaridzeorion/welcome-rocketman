import React from 'react'
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Welcome Rocketeer!</h1>

            <Link to="personal-information"><button>Start Questionnaire</button></Link> <br />
            <Link to="submitted-applications"><button>Submitted Applications</button></Link> <br />

            <img alt="rocketman" src="" />
        </div>
    )
}

export default MainPage