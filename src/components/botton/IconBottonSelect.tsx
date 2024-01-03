import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
const IconBottonSelect = () => {
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
            <FormControlLabel
                value="bottom"
                control={
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                </IconButton>}
                label="Bottom"
                labelPlacement="bottom"
            />
                </FormGroup>
            </FormControl>
        </>
    );
};

export default IconBottonSelect;