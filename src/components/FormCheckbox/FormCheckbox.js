import Checkbox from '@mui/material/Checkbox';

const FormCheckbox = ({value, onClick}) => {

  return (
    <Checkbox
      checked={value}
      onChange={onClick}
      inputProps={{ 'aria-label': 'controlled' }}
      size="small"
      style={{padding: 0}}
    />
  );
}

export default FormCheckbox
