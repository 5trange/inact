import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

export default function BasicSelect() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel>Status</InputLabel>
        <Select
          id="status"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'paid'}>Paid</MenuItem>
          <MenuItem value={'outstanding'}>Outstanding</MenuItem>
          <MenuItem value={'lat'}>Late</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
