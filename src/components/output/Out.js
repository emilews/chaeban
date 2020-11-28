import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';
import NavButton from '../button/NavButton';
import './Out.css'
import { getSavedData } from '../../utils/Utils';

const Out = () => {

    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const data = getSavedData();
        setMessage(data.message);
        setDate(data.date);
        setTheme(data.theme);
    }, []);
    return (
        <div>
            <Paper className="PaperStyleOut" square={false} elevation={3}>
                <NavButton />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <div className="DateStyle">
                            {date.slice(0, 15)}
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="right"
                >
                    <Grid item>
                        <div className="MessageStyle">
                            {message}
                        </div>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default Out;