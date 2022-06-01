import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./styles/App.css";


const SelectButton = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='Button-container'>
            <div className='Button'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Networkを選択</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ethereum</MenuItem>
                        <MenuItem value={20}>Polygon</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default SelectButton;