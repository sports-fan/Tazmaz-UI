import { Typography } from '@mui/material'
import useStyles from './styles'
import cn from 'classnames'

const AuthLeftSide = ({icon, title, className}) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.main, className)}>
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
