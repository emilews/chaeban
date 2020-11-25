import 'date-fns';
import React, { useState } from 'react';
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
    Select
} from '@material-ui/core';
import { HorCenter, VerCenter } from '../containers/Containers'




const In = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [message, setMessage] = useState("");
    const [selectedTheme, setSelectedTheme] = useState("Light");
    const themeNames = ["Default", "Dark", "Chaeban", "Space", "Random", "Custom colors"];

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
                break;
            default:
                // Nothing
                break;
        }

    };
    return (
        <div>
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
            <HorCenter>
                <TextField
                    id="message-tfield"
                    label="Message"
                    value={message}
                    onChange={(e) => {
                        handleChange('message')(e.target.value);
                    }}
                    multiline={true}
                    margin="normal"
                    rows={7}
                    spellCheck={true}
                    variant="outlined"
                />
            </HorCenter>
            <HorCenter>
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
            </HorCenter>
        </div>
    );
}
export default In;