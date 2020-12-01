import 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Paper
} from '@material-ui/core';
import NavButton from '../button/NavButton';
import './In.css'
import { saveData, getSavedData } from '../../utils/Utils';
import { ThemeSelectorContext } from "../themes/ThemeEngine";

const In = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('1998-08-18T21:11:54'));
    const [message, setMessage] = useState("");
    const [selectedTheme, setSelectedTheme] = useState("Default");
    const themeNames = ["Default", "Dark", "Chaeban", "Gradient"];
    /** Context Theme Engine data */
    const { toggleTheme } = useContext(ThemeSelectorContext);
    /** Get saved data from localStorage */
    useEffect(() => {
        const data = getSavedData();
        if (data.message != null) {
            setMessage(data.message);
        }
        if (data.date != null) {
            setSelectedDate(new Date(data.date));
        }
        if (data.theme != null) {
            setSelectedTheme(data.theme);
            toggleTheme(data.theme);
        }
    }, []);

    const handleChange = (variable) => (data) => {
        switch (variable) {
            case 'date':
                setSelectedDate(data);
                break;
            case 'message':
                setMessage(data);
                break;
            case 'theme':
                setSelectedTheme(data);
                toggleTheme(data);
                break;
            default:
                // Nothing
                break;
        }
    };
    useEffect(() => {
        saveData({ date: selectedDate, message: message, theme: selectedTheme });
    }, [message, selectedTheme, selectedDate]);
    useEffect(() => {
        saveData({ date: selectedDate, message: message, theme: selectedTheme });
    }, []);

    return (
        <div>
            <Paper className="PaperStyleIn" square={false} elevation={3}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <TextField
                            id="message-tfield"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => {
                                handleChange('message')(e.target.value);
                            }}
                            multiline={true}
                            margin="normal"
                            rows={7}
                            size="medium"
                            spellCheck={true}
                            variant="outlined"
                            className="TextFieldStyle"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid
                            container
                            direction="column"
                            justify="ceter"
                            alignItems="center"
                        >
                            <Grid item xs={6} className="Selectors">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date"
                                            format="dd/MM/yyyy"
                                            value={selectedDate}
                                            onChange={(date) => {
                                                handleChange('date')(date);
                                            }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel id="themes-label">Theme</InputLabel>
                                    <Select
                                        labelId="theme-select-label"
                                        id="theme-selector"
                                        value={selectedTheme}
                                        onChange={(e) => {
                                            handleChange('theme')(e.target.value);
                                        }}
                                    >
                                        {
                                            themeNames.map((item) => {
                                                return (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <NavButton />
            </Paper>
        </div>
    );
}
export default In;