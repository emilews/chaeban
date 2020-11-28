import React from 'react';
import { IconButton } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Floatie.css';

const Floatie = () => {
    const handleRedirect = () => {
        window.open("https://github.com/emilews/chaeban");
    }
    return (
        <div className="FooterFloat">
            <Fab color="white" aria-label="add">
                <IconButton size="medium" className="" onClick={handleRedirect}><GitHubIcon /></IconButton>
            </Fab>
        </div>
    );
}
export default Floatie;