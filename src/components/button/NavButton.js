import React from 'react';
import { Button } from '@material-ui/core';
import { isURLOutput } from '../../utils/Utils';
import { withRouter } from "react-router-dom";
import './NavButton.css';

const NavButton = (props) => {
    const performRedirect = (path) => {
        props.history.push(path);
    };
    const handleRedirect = () => {
        if (isURLOutput()) {
            performRedirect("/");
        } else {
            performRedirect("/output");
        }
    }
    return (
        <div>
            <Button className="NavButton" onClick={handleRedirect} variant="contained">{isURLOutput() ? "Go back" : "Output"}</Button>
        </div>
    );
}

export default withRouter(NavButton);