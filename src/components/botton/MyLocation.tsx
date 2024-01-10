import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import FormGroup from '@mui/material/FormGroup';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';


const MyLocation = () => {
    return (
        <>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
            <FormControlLabel
                value="end"
                control={
                <IconButton aria-label="locationOn" color="primary">
                    <LocationOnIcon fontSize="large" />
                </IconButton>}
                label="MyLocation"
                labelPlacement="end"
            />
                </FormGroup>
            </FormControl>
        </>
    );
};

export default MyLocation;
