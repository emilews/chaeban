import React from 'react';
import { IconButton } from '@material-ui/core';
import { isURLOutput } from '../../utils/Utils';
import { withRouter } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
            <IconButton className={"ButtonBase " + (isURLOutput() ? "NavButtonIn" : "NavButtonOut")} onClick={handleRedirect} variant="contained">{isURLOutput() ? <ArrowBackIcon/> : <ArrowForwardIcon/>}</IconButton>
        </div>
    );
}

export default withRouter(NavButton);