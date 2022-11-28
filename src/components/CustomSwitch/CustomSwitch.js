import { styled } from '@mui/material/styles';
import { FormGroup, Switch, Stack } from '@mui/material';


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 32,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 24,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 24,
    height: 24,
    borderRadius: 56,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
    boxSizing: 'border-box',
  },
}));

const CustomSwitch = ({right, left}) => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={3} alignItems="center">
        {right}
        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
        {left}
      </Stack>
    </FormGroup>
  );
}

export default CustomSwitch
