import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      height: 70
    },
    width: '100%',
    height: 100
  },
  root: {
    "& .MuiSvgIcon": {width: 40, height: 40},
    "& .MuiStepIcon-active": { color: "red" },
    "& .MuiStepIcon-completed": { color: "green" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
  },
}))