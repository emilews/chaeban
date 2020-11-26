import React, { useState } from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';
import NavButton from '../button/NavButton';
import './Out.css'

const Out = () => {
    return (
        <div>
            <Paper className="PaperStyle" square={false} elevation={3}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <NavButton />
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}
export default Out;