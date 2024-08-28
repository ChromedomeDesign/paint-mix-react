import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            sx={{ 
                borderRadius:'8px',
                width:'280px',
                height:'36px',
                backgroundColor:'#EEEEEE'
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                sx: {
                    height:'36px',
                    '& fieldset': { border: 'none' }
                }
            }}
        />
    );
};

export default SearchBar;
