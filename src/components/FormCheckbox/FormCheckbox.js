import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const FormCheckbox = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      size="small"
      style={{padding: 0}}
    />
  );
}

export default FormCheckbox
