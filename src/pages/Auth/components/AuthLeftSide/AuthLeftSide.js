import { Typography } from '@mui/material'
import useStyles from './styles'

const AuthLeftSide = ({icon, title}) => {
  const classes = useStyles()

  return (
    <div className={classes.leftSide}>
      <div className={classes.titleDiv}>
        <Typography variant='h5' className={classes.title}>{title}</Typography>
      </div>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={icon} alt='logo' />
      </div>
    </div>
  )
}

export default AuthLeftSide
