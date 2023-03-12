import { Typography } from '@mui/material'
import useStyles from './styles'
import cn from 'classnames'

// reusable component for login, 2fa, stage 1 and stage 2
const AuthLeftSide = ({icon, title, className, titleColor, bgColor}) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.main, className)} style={{backgroundColor: bgColor}}>
      <div className={classes.titleDiv}>
        <Typography variant='h4' className={titleColor}>{title}</Typography>
      </div>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={icon} alt='logo' />
      </div>
    </div>
  )
}

export default AuthLeftSide
